// 这个文件时vue/cli的配置文件，webpack.config.js没有。如果需要修改项目的全局配置，需要在这个文件中更改
module.exports={
    publicPath:"./",
    //lintOnSave:false,// 如果是false，那么eslint校验就不再报错了，
    devServer:{
        // vue/cli 将项目部署到了当前的8080端口；admin是后端提供的接口的；后端的端口是3000; 允许8080向3000端口发送请求
        proxy:"http://localhost:3000"
    },
    // 会把这个合并到内置的loader；
    // configureWebpack:{
    //     modules:{
    //         rules:[{
    //             test:/\.(png|jpg|git)$/,
    //             use:["url-loader"]
    //         }]
    //     },
    //     plugins:[]
    // }
}