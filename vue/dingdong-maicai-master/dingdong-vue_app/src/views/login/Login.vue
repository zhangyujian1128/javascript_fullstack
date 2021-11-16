<template>
    <div class="login">
        <van-nav-bar title="登录/注册" left-arrow @click-left="onClickLeft" />
        <van-field v-model="tel" type="tel" placeholder="请输入手机号" label="手机号" @input="isBtnCode()"/>
        <div class="sms">
        <van-field v-model="sms" type="number" label="验证码" @input="isBtnConfirm()" placeholder="请输入短信验证码" />
            <van-button class="btnCode" size="small" type="primary" :disabled="btnCode" @click="buildCode()">{{ codeTitle }}</van-button>
        </div>
        <div class="login_btn">
            <van-button class="nextBtn" type="primary" size="normal" :disabled="nextBtn" @click="btnConfirm()">登录</van-button>
        </div>
    </div>
</template>
<script>
import {getToken} from '../../network/login.js'
export default {
    data() {
        return {
            tel: "",
            sms:'',
            nextBtn:true,
            btnCode:true,
            codeTitle:'发送验证码',
            itemCode:''
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        isBtnCode(){
            if(this.tel.length==11){
                this.btnCode = false;
            }
        },
        isBtnConfirm(){
            if(this.sms.length==4){
                this.nextBtn = false;
            }
        },
        // 发送验证码
        buildCode(){
            let time = 60;
            let reg =  /^1[34578]\d{9}$/;   // 手机号码正则
            if(reg.test(this.tel)){
                console.log("发送验证码");
                let temp = setInterval(() => {
                        time --;
                        this.codeTitle = `${time}s后重新发送`
                        this.btnCode=true;
                        if(time<0){
                        clearInterval(temp)
                        time = 60;
                        this.codeTitle = '发送验证码';
                        this.btnCode = false;
                    }
                }, 1000);
                for(let i=0;i<4;i++){
                    let numItem = Math.floor(Math.random()*10);
                    console.log(numItem);
                    this.itemCode += numItem;
                }
                this.$dialog.alert({
                    title:"您的验证码为：",
                    message:this.itemCode
                });
            }else{
                this.$toast({
                    message:'手机号不符合！',
                    duration:1000
                });
            }
        },
        // 登录
        btnConfirm(){
            if(this.tel&&this.sms){
                if(this.sms==this.itemCode){
                    console.log("a")
                    getToken(this.tel).then(res=> {
                        if(res.code==0){
                            sessionStorage.setItem("token",res.data.token);
                            this.$toast.loading({
                                message:'登陆中,请稍后...',
                                forbidClick: true,
                                duration:2500,
                                overlay:true,
                                complete:()=> {
                                }
                            });
                           let temp = setTimeout(()=>{
                                this.$router.push({
                                        path:'/profile',
                                    });
                                    this.$store.state.profile = '/profile'
                                // this.$router.go(-1)
                            },2500)
                        }
                        console.log(res);
                    })
                    
                    sessionStorage.setItem('tel',this.tel);
                }else{
                    this.$toast('验证码错误！');
                }
            }else{
                this.$toast("手机号和验证码不能为空！");
            }
        }
    }
};
</script>
<style lang="less" scoped>
.login {
    .van-nav-bar {
        background-color: #f8f8f8;
    }
    .van-field{
        align-items: center;
        height: 1rem;
    }
    .sms{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #FBFBFC;
        .btnCode{
            width: 2rem;
            margin-right: 0.2rem;
            border-radius: 20px;
        }
    }
    .login_btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.6rem;
        width: 100%;
        height: 1rem;
        .nextBtn{
            width: 60%;
            border-radius: 20px;
        }   
    }
}
</style>