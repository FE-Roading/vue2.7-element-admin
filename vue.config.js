"use strict"

const { defineConfig } = require("@vue/cli-service")
const webpack = require("webpack")
const path = require("path")
const pkg = require("./package.json")

const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const __APP_INFO__ = {
  pkg: {
    name: pkg.name,
    version: pkg.version,
  },
  lastBuildTime: Date.now(),
  // lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = "Vue2.7 Admin"

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: process.env.BUILD_MODE !== "prod",
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://www.ykt.com/',//接口域名
    //     changeOrigin: true, //改变源：host地址
    //     secure: false, // 接受 运行在 https 上的服务
    //     pathRewrite: {
    //       '^/api': '/index/index'//需要rewrite重写
    //     }
    //   }
    // }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    chainWebpack: (config) => {
      config.plugin("define").tap((args) => {
        args[0].__APP_INFO__ = JSON.stringify(__APP_INFO__)
        return args
      })
    },
  },
})
