module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    publicPath: './',       // 公共路径（必须有的）
    outputDir: 'dist',      // 输出文件目录
    assetsDir: 'static',        // 静态资源文件名称
    lintOnSave: false,
    productionSourceMap: false,     // 打包后去除js的map文件
}