module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'plugins': '@/plugins',
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8001',
                // target: 'http://www.codeman.ink:8001',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/downloadfile': {
                target: 'https://wwx-lwj.oss-cn-hangzhou.aliyuncs.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/downloadfile': ''
                }
            },
            '/downloadvideo': {
                target: 'https://outin-cefd5d83abc511ebb0a800163e1a625e.oss-cn-shanghai.aliyuncs.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/downloadvideo': ''
                }
            },
        }
    },
}