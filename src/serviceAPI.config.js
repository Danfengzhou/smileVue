const BASEURL = "https://www.easy-mock.com/mock/5b57f7769ddd1140ec2eb4b9/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
    getShoppingMallInfo: BASEURL + 'index',
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser:LOCALURL+'user/register', //用户登录接口
    login:LOCALURL+'user/login'//用户注册接口
}

module.exports = URL