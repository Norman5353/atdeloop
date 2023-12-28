const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('node-sass'),
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('txt')
      .test(/\.txt$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
  },
});
