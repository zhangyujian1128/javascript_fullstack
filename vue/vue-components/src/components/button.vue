<template>
  <button :class="'i-button-size'+size">
      <slot name="icon"></slot>
      <slot></slot>
  </button>
</template>

<script>
function oneOf(value,arr){
    let a = arr.indexOf(value)
    if(a = -1){
        return false
    }else{
        return true
    }
}
export default {
    props:{
        size:{
            validator(value){
                return oneOf(value, ['small','large','default'])
            },
            default: 'default'
        }
    },
    data(){
        return{
            message: '子组件的内容'
        }
    },
    methods:{
        handleClick (){
            this.$emit('on-click')
        },
        sureClick(){
            console.log('确认')
            this.$emit('mess',this.message)
        }
    }
}
</script>

<style scoped>
    button{
        border: 1px solid orange;
        background-color: yellow;
        color: black;
        border-radius: 5px
    }
    .i-button-sizelarge{
        padding: 10px 16px;
    }
    .i-button-sizedefault{
        padding: 8px 14px;
    }
    .i-button-sizesmall{
        padding: 4px 10px;
    }
</style>