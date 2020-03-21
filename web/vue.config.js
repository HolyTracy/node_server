module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir: process.env.outputDir,
    configureWebpack: {
        externals: {
            vue: "Vue",
            "vue-router": "VueRouter",
            "element-ui": "ELEMENT",
            axios: "axios"
        }
    }
};