<template>
  <div class="login-warp">
    <el-form class="login-from" label-position="top" label-width="80px" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin" class="login-button" type="primary">登陆</el-button>
    </el-form>
  </div>
</template>

<script>

export default {

  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
     handleLogin() {
        this.$http.post("login",this.formData)
        .then((res) => {
          // console.log(res);
          const data = res.data;
          const {meta:{status,msg}} = data;
          if(status === 200) {
            const token = data.data.token
            sessionStorage.setItem('token',token)
            this.$message.success(msg)
            this.$router.push({
              name: "homepage"
            })
          }else {
            this.$message.error(msg)
          }
          
        })
    }
  }
}

</script>

<style>
.login-warp {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-from {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-button {
  width: 100%;
}
</style>
