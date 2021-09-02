// eslint-disable-next-line import/no-anonymous-default-export
export default {
  isLogin: false,
  login(){
    this.isLogin = true;
  },
  loginOut(){
    this.isLogin = false
  }
}