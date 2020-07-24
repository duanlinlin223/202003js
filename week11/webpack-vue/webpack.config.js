let WebpackHtmlPlugin = require("html-webpack-plugin");
let VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports={
    mode:"development",
    devtool:"eval-source-map",// 用于调试的模块
    // __dirname : 当前的文件绝对路径
    entry:__dirname+"/src/main.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"./public",// 启动服务器的跟目录
        inline:true,
        port:8080,// 启动的端口号
        proxy:{
            "/api":{
                target:"http://localhost:9000",
                secure:false// 目标服务器是否是安全协议
            }
        }
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                use:["babel-loader"],
                exclude:"/node_modules/"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader","postcss-loader"],
            },
            {
                test:/(\.png|\.jpg|\.gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:8192 // 这个图片如果超过8Kb，就不转base64;1kb=1024b 1M =1024Kb  1G=1024M   1T=1024G 
                    }
                }]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
        new WebpackHtmlPlugin({
            // 打包之后的js会自动插入到这个文件中；
            template:__dirname+"/src/index.html"
        }),
        new VueLoaderPlugin()
    ]
}

//npm run dev:启动服务