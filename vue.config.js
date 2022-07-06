"use strict"

const { defineConfig } = require("@vue/cli-service")
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = "Vue2.7 Admin"

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
})
