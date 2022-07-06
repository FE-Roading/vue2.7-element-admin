"use strict"

const { defineConfig } = require("@vue/cli-service")
const webpack = require("webpack")
const path = require("path")
const pkg = require("./package.json")

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
