var htmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports={
  //  entry:["./src/script/main.js","./src/script/a.js"],// 打包的入口
  entry:{
    main:"./src/script/main.js",
    a:"./src/script/a.js",
    b:"./src/script/b.js",
    c:"./src/script/c.js"
  },
  output:{// 输出
    path:path.resolve(__dirname, "./dist"),// 输出的地址
    filename:"js/[name]-[hash].js"// 输出地址的js名称
  //  publicPath:"https://cdn.com/"// 指定生成html页面中javascript的前面的地址
  },
  plugins:[// 插件
    // 自动生成html的插件
    /*new htmlWebpackPlugin({
      template:'index.html',
      // 文件的名称
      filename:"index.html",
      // 标签放置的位置
      inject:"false",
      // html文档的标题
      title:"webpack is awesome!",
      // 日期（自定义）
      date:new Date(),
      // html代码压缩
      minify:{
        // 删除注释
        removeComments:true,
        // 删除空格
        collapseWhitespace:true
      }
    })*/

    new htmlWebpackPlugin({
      template:'main.html',
      // 文件的名称
      filename:"a.html",
      // 标签放置的位置
      inject:"body",
      // html文档的标题
      title:"this is a.html",
      // 指定html页面包含的chunks
      chunks:['main','a']
    }),
    new htmlWebpackPlugin({
      template:'main.html',
      // 文件的名称
      filename:"b.html",
      // 标签放置的位置
      inject:"body",
      // html文档的标题
      title:"this is b.html",
      chunks:['b','main']
    }),
    new htmlWebpackPlugin({
      template:'main.html',
      // 文件的名称
      filename:"c.html",
      // 标签放置的位置
      inject:"body",
      // html文档的标题
      title:"this is c.html",
      //chunks:['c']
      // 排除的chunks
      excludeChunks:['a','b']
    })
  ]
}
