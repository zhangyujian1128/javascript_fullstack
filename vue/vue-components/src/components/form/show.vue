<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import iForm from './form'
import iFormItem from './form-item'
import iInput from './input'
export default {
    components:{
        iForm,
        iFormItem,
        iInput
    },
    data(){
        return{
            formValidate: {
                name: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        handleSubmit(){
            this.$refs.form.validate((valid) => {
                if(valid){
                    window.alert('提交成功')
                }else{
                    window.alert('表单提交失败')
                }
            })
        }
    }
}
</script>

<style>

</style>