const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack') // Requer o Webpack separadamente

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({ // Usa a instância do Webpack diretamente
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      })
    ]
  }
})