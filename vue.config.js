const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack:{
    devServer:{
      host:"localhost",
      port:8088,
      proxy:{
        '/api':{
          target:"http://localhost:7001",
          changeOrigin:true,
          ws:true,
          pathRewrite:{
            "^/api":""
          }
        }
      }
    }
  }
  
});
