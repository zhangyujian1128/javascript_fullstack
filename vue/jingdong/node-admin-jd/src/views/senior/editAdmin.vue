<!-- editAdmin -->
<style lang="scss" scoped>
.edit-container{
  padding: 15px;
  width: 450px;
}

</style>
<template>
  <div class="edit-container" v-loading.fullscreen.lock="fullscreenLoading">
    <el-form :model="Form" :rules="Form.rules" ref="ruleForm" label-position="left" class="card-box admin-form">
      <!-- <el-form-item :rules="[
      { required: true, message: '密码不能为空'},
      { min: 5, message: '密码不能小于3位'},
    ]" label="密码" prop="password" label-width="80px">
        <el-input v-model="Form.password"></el-input>
      </el-form-item> -->
      <el-form-item :rules="[
      { required: true, message: '手机号码不能为空'},
      { min: 11, message: '手机号码是11位'},
    ]" label="手机号码" prop="phone" label-width="80px">
        <el-input v-model="Form.phone"></el-input>
      </el-form-item>
      <el-form-item label="权限" prop="permission" label-width="80px">
        <el-select v-model="Form.selectedPermission" placeholder="请选择">
          <el-option v-for="item in Form.cities" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核状态" prop="permission" label-width="80px">
          <el-select v-model="Form.status" placeholder="请选择">
            <el-option v-for="item in Form.statusData" :key="item.value" :label="item.label" :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      <el-form-item label="地区" prop="region" label-width="80px">
        <v-distpicker @selected="onDistpickerSelected"></v-distpicker>
      </el-form-item>
      <el-form-item :rules="[
      { required: true, message: '地址不能为空'},
      { min: 5, message: '地址不能小于5未'},
    ]" label="详细地址" prop="addressParams.address" label-width="80px">
        <el-input v-model="Form.addressParams.address"></el-input>
      </el-form-item>
      <el-form-item label="用户头像" prop="avatar" label-width="80px">
        <el-upload class="avatar-uploader" action="http://awei.fun:3333/Unit/uploadfile" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="Form.imageUrl" :src="Form.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="EditAdmin">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import { getToken } from '@/utils/auth' // 验权
  
  export default {
    data() {
      return {
        fullscreenLoading: false,
        Form: {
          phone: '',
          // password: '',
          imageUrl: '',
          addressParams: {
            province: '',
            city: '',
            area: '',
            address: '',
          },
          rules: {
            password: [{
              required: true,
              message: '请输入密码',
              trigger: 'change'
            }],
            phone: [{
              required: true,
              message: '请输入手机号码',
              trigger: 'change'
            }],
            address: [{
              required: true,
              message: '请输入地址',
              trigger: 'change'
            }],
          },
          selectedAddress: '',
          selectedOptions: [],
          status: '',
          statusData: [{
            value: '1',
            label: '已审核'
          },{
            value: '9',
            label: '未审核'
          }],
          cities: [{
            value: 'admin',
            label: '普通管理员'
          }, {
            value: 'test',
            label: '测试'
          }, {
            value: 'root',
            label: '超级管理员'
          }],
          selectedPermission: ''
        }
      };
    },

    watch: {},

    components: {VDistpicker},

    computed: {},

    methods: {
      handleAvatarSuccess(res, file) {
        this.Form.imageUrl = 'http://awei.fun/api/resouces/' + file.response.Data["0"].filename;
      },
      onDistpickerSelected(data) {
        this.Form.addressParams.province = data.province.value;
        this.Form.addressParams.city = data.city.value;
        this.Form.addressParams.area = data.area.value;
      },
      changeAddress(val) {
        this.Form.addressParams.address = val;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      EditAdmin(){
        if(!this.Form.selectedPermission)return this.$message.error('请选择权限');
        if(!this.Form.addressParams.province || !this.Form.addressParams.city || !this.Form.addressParams.area)return this.$message.error('请完善地址信息');
        if(!this.Form.imageUrl)return this.$message.error('请上传用户头像');
        if(!this.Form.status)return this.$message.error('请选择审核状态');
        this.fullscreenLoading = true;
        const FromData = {
          AdminToken: getToken(),
          TargetId: this.$route.params.id,
          // password: this.Form.password, //暂时不能修改密码
          phone: this.Form.phone, 
          roles: this.Form.selectedPermission, 
          photo_url: this.Form.imageUrl, 
          province: this.Form.addressParams.province, 
          city: this.Form.addressParams.city, 
          area: this.Form.addressParams.area, 
          status: this.Form.status, 
          address: this.Form.addressParams.address, 
        };
        this.$store.dispatch('EditAdminInfo', FromData).then(res=>{
          this.fullscreenLoading = false;
          this.$message.success('修改成功');
          this.$store.dispatch('AdminList');
          setTimeout(()=>{
            this.$router.go(-1);
          },1000)
        },err=>{this.fullscreenLoading = false})
      }
    },

    mounted: function () {
      if(!this.$route.params.id)return this.$message.error('用户标识错误');
      const AdminId = this.$route.params.id;
      this.fullscreenLoading = true;
      this.$store.dispatch('AdminInfo',{token: AdminId}).then(res => {
        this.Form.phone = res.Data.phone || '';
        this.Form.selectedPermission = res.Data.roles || '';
        this.Form.imageUrl = res.Data.photo_url || '';
        this.Form.addressParams.province = res.Data.province || '';
        this.Form.addressParams.city = res.Data.city || '';
        this.Form.addressParams.area = res.Data.area || '';
        this.Form.addressParams.address = res.Data.address || '';
        this.Form.status = res.Data.status || '';
        this.fullscreenLoading = false;
      },err=>{})
    }
  }

</script>
<style lang="scss" scoped>


</style>
