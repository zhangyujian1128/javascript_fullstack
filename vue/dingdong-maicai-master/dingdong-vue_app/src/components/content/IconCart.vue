<template>
    <div class="icon_cart" @click.stop="addCard()"> <!--stop修饰符，取消事件冒泡-->
        <van-icon name="cart-o" color="#ffffff" size="18"/>
    </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,  // 指定传入值的类型，类型校验
            default:function(){
                return {};
            }
        }
    },
    name:'IconCart',
    data() {
        return{
        }
    },
    created() {

    },
    methods:{
        // 添加到购物车
        addCard(){
            // console.log(JSON.parse(JSON.stringify(this.$store.state.cartList)));
            this.$toast({
                message:'添加成功！',
                icon:'success',
                duration:1000
            });
            let index = this.$store.state.cartList.findIndex(item => {       // 有就返回找到的那个元素对象 没有返回 undefined 
                return item.id == this.goodsItem.id;                        // findIndex 有返回索引位置  没有返回 -1
            });
            console.log(this.goodsItem.id)
            console.log(index)
            if(index==-1){
                // 当购物车数组中不存在时
                this.$set(this.goodsItem,'num',1);
                this.$set(this.goodsItem,'isCheck',false);
                this.$store.state.cartList.push(this.goodsItem);
            }else{
                // 当购物车数组中已经存在时   
                this.$store.state.cartList[index].num ++;
            }
            console.log(this.$store.state.cartList)
        }
    }
}
</script>
<style lang="less" scoped>
    .icon_cart{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 0.6rem;
        height: 0.6rem;
        font-weight: bold;
        border-radius: 100%;
        background-color: #3BB86A;
    }
</style>