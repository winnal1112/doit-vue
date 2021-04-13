import { userLogin, getUserInfo } from '@/api/loginApi.js'

export default {
  data () {
    return {
      loginForm: {},
      rules: {
        userId: [{required: true, message: '请输入手机号或邮箱', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  mounted () {
    getUserInfo('1').then( res=> {
      console.info(res)
    })
  },
  methods: {
    // 登录验证
    login (formName) {
      this.$refs[formName].validate((valid) => {
        // 表单输入验证成功
        if (valid) {
          // 输入的用户信息不为空时
          if (this.loginForm.userId && this.loginForm.password) {
            // 保存用户信息到本地
            localStorage.setItem('userInfo', JSON.stringify(this.loginForm))
            // this.$cookies.set('userInfo', JSON.stringify(this.loginForm), '30d')
            // 验证用户信息
            userLogin(this.loginForm).then( res=> {
              if (res) {
                this.$router.push({name: 'layout'})
              }
            })
          } else {
            return false
          }
        }
      })

    }
  },
  beforeDestroy () {
  }
}
