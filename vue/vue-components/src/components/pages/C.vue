<template>
    <div class="c-test">Age:{{app.userInfo.age}}
      <button @click="aaa">change</button>
    </div>
</template>

<script>
export default {
    inject:[
            'app'
        ],
        methods:{
            aaa(){
                app.userInfo.age = 10
            }
        }
}
</script>

<style>

</style>