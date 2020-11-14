module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        //配置路径
        // '@':'src'  本来已经配置好的
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        // 'router':'@/router',引用得少所以注释掉
        // 'store':'@/store',
        'views':'@/views'
      }
    }
  }
}