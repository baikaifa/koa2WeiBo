/**
 * @description存储配置
 * @author 白凯发
 */
const { isProd } = require('../utils/env')
let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

if (isProd) {
    REDIS_CONF = {
        //线上的redis配置
        port: 6379,
        host: '127.0.0.1'
    }
}
module.exports = {
    REDIS_CONF
}