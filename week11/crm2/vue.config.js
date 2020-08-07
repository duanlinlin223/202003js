module.exports = {
    publicPath: "./",
    lintOnSave: false, //如果是false那么eslint就不在进行校验不在报错了
    devServer: {
        //vue/cli将项目部署到了当前的8080端口；admin是后端提供的接口的，端口号是3000，允许8080向3000端口发送请求
        proxy: "http://localhost:3000",
    },
    // configureWebpack: {
    //     modules: {
    //         rules: [
    //             {
    //                 test: /\.(png|jpg|gif)$/,
    //                 use: ["url-loader"],
    //             },
    //         ],
    //     },
    // },
};
