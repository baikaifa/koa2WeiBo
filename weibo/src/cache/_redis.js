/**
 * @description 连接redis的方法get set
 * @author 白凯发
 */


const redis = require('redis')
const { REDIS_CONF } = require('../cong/db')

//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', err => {
    console.error('redis error', err)
})
/**
 * 
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间，单位s
 */
//set
function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
}

/**
 * redis get
 * 
 */

//get
function get(key) {
    const promise = new Promise((resolve, reject) => {

        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val == null) {
                resolve(null)
                return
            }
            try {
                resolve(
                    JSON.parse(val)
                )
            } catch (ex) {
                resolve(val)
            }

        })

    })
    return promise



}


module.exports = {
    set,
    get
}


