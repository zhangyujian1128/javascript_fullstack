<template>
    <div class="edit_address">
        <tab-cart :title="title"></tab-cart>
        <div class="form">
            <van-form>
                <van-field
                    v-model="fromData.name"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="fromData.tel"
                    type="text"
                    name="手机号"
                    label="手机号"
                    placeholder="收货人手机号"
                    :rules="[{ required: true, message: '手机号不能为空' }]"
                />
                <van-field
                    v-model="fromData.address"
                    name="地区"
                    label="地区"
                    placeholder="选择/省/市/区"
                    :rules="[{ required: true, message: '请选择地区' }]"
                    @click="showPopup()"
                />
                <van-field
                    v-model="fromData.addressDetail"
                    name="详细地址"
                    label="详细地址"
                    placeholder="街道门牌、楼层房间号等信息"
                    :rules="[{ required: true, message: '请填写详细信息' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" @click="submit()">提交</van-button>
                </div>
            </van-form>
        </div>
        <van-popup v-model="isPopup" position="bottom" round @click-overlay="closePopup()">
            <van-area
                id="city"
                title="标题"
                :area-list="areaList"
                value=""
                :columns-placeholder="['请选择', '请选择', '请选择']"
                @confirm="confirmBtn"
            />
        </van-popup>
    </div>
</template>
<script>
import areaList from "../../pluginunit/area.js";
import TabCart from "../../components/content/TabCart.vue";
export default {
    data() {
        return {
            fromData:{
                name:'',
                tel:'',
                address:'',
                addressDetail:'',
            },
            isPopup: false,
            areaList: areaList,
            title: "",
            city_code:''
        };
    },
    created() {
        this.title = this.$route.query.title;
    },
    methods: {
        confirmBtn(res,index){
            console.log(res);       // 打印数组对象
            console.log(index);     // 索引
            this.fromData.address = `${res[0].name}/${res[1].name}/${res[2].name}`;
            this.isPopup = false;
        },
        showPopup(){
            this.isPopup = true;
        },
        addAddressBtn() {
            this.isPopup = true;
        },
        closePopup() {
            this.isPopup = false;
        },
        submit(){
            if(this.fromData.name&&this.fromData.tel&&this.fromData.address&&this.fromData.addressDetail){
                this.$store.state.addressArr.push(this.fromData);
                this.$router.push({
                    path:'/addAddress'
                });
            }else{
                this.$toast("请填写完整！")
            }
        }
    },
    components: {
        TabCart
    }
};
</script>
<style lang="less" scoped>
.edit_address {
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
}
</style>