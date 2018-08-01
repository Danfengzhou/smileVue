<template>
  <div>
    <van-nav-bar title="用户登录" left-text="返回"  left-arrow @click-left="goBack" />
    <div class="login-panel">
      <van-field v-model="username" label="用户名" icon="clear" placeholder="请输入用户名" required @click-icon="username = ''" :error-message="usernameErrorMsg" />
      <van-field v-model="password" type="password" label="密码" icon="clear" placeholder="请输入密码" required @click-icon="password = ''" :error-message="passwordErrorMsg"
      />
      <div class="login-button">
        <van-button @click="loginAction()" :loading="openLoading" type="primary" size="large">立即登录</van-button>
      </div>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import url from '@/serviceAPI.config.js'
  import {Toast} from 'vant'
  export default {
    data() {
      return {
        username: "",
        password: "",
        openLoading:false, //是否开启用户的Loading
        usernameErrorMsg:'',//当用户名出现错误时
        passwordErrorMsg:''//当用户密码出现错误时
      }
    },
    created(){
      if(localStorage.userInfo){
        Toast.success('您已经登录')
        this.$router.push('/')
      }
    },
    methods: {
      goBack: function () {
        this.$router.go(-1)
      },
      //验证表单
      checkForm: function(){
        let isOk = true
        if(this.username.length < 5){
          this.usernameErrorMsg="用户名不能小于5位"
          isOk = false
        }else{
          this.usernameErrorMsg=''
        }
        if(this.password.length < 6){
          this.passwordErrorMsg="密码不能小于6位"
          isOk = false
        }else{
          this.usernameErrorMsg=""
        }
        return isOk
      },
      // axios登录用户方法,向后端post数据
      axiosLoginUser() {
        //先把按钮进行loading状态,防止重复提交
        this.openLoading = true
        axios({
          url: url.login,
            method: 'post',
            data: {
              userName: this.username,
              password: this.password
            }
          })
          .then(response => {
              console.log(response)
              if(response.data.code == 200 && response.data.message){
                new Promise((resolve,reject)=>{
                  localStorage.userInfo = {userName:this.username}
                  setTimeout(()=>{
                    resolve()
                  },500)
                }).then(()=>{
                  Toast.success('登录成功')
                  this.$router.push('/')
                }).catch(err=>{
                  Toast.fail('登录失败')
                  console.log(err)
                  this.openLoading = false
                })
              }else{
                Toast.fail('登录失败')
                this.openLoading = false
              }
          })
          .catch((error) => {
              console.log(error)
              Toast.fail(登录失败)
              this.openLoading = false
          })
      },
      loginAction: function(){
            this.checkForm() && this.axiosLoginUser()
      }
    }
  }

</script>

<style scoped>
  .login-panel {
    width: 96%;
    border-radius: 5px;
    margin: 20px auto;
    padding-bottom: 50px;

  }

  .login-button {
    padding-top: 10px;
  }

</style>