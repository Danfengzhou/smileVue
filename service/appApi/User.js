
const Router = require ('koa-router')
const mongoose = require('mongoose')
let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是用户操作首页"
})
router.post('/register',async(ctx)=>{
    //取得model
    const User = mongoose.model('User')
    //把从前端接收的Post数据封装成一个新的User对象
    let newUser = new User(ctx.request.body)
    await newUser.save().then(()=>{
        //成功返回code=200,并返回成功信息
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(error=>{
        //失败返回code=500,并返回错误信息
        ctx.body={
            code:500,
            message:error
        }
    })

})
// 登录的实践
router.post('/login',async(ctx)=>{
    //得到前端传递过来的数据
    let loginUser = ctx.request.body
    console.log(loginUser)
    let userName = loginUser.userName
    let password = loginUser.password
    //引入User的model
    const User = mongoose.model('User')
    //查找用户名是否存在,如果存在开始对比密码
    await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result)
        if(result){
            //console.log(User)
            //当用户名存在时,开始比对密码
            let newUser = new User() //实例方法,new一个对象
            await newUser.comparePassword(password,result.password)
            .then(isMatch=>{
                //返回对比结果
                ctx.body={code:200,message:isMatch}
            })
            .catch(error=>{
                //出现异常,返回异常
                console.log(error)
                ctx.body={code:500,message:error}
            })
        }else{
            ctx.body={code:200,message:'用户名不存在'}
        }
    }).catch(error=>{
        console.log(error)
        ctx.body={code:500,message:error}
    })
})
module.exports=router;