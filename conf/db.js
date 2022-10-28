/**
 * @description 数据库存储配置
 * @author 爱呵呵
 * @param host  数据库IP地址
 * @param user  数据库用户名
 * @param password  数据库登陆密码
 * @param port  数据库端口号 默认 3306
 * @param database 数据库名称
 */

//  isProd 为 true 就是线上数据库 为false 就是本地mysql
const { isProd } = require("../env");

let MYSQL_CONF = {};

if (isProd) {
  MYSQL_CONF = {
    host: "",
    user: "root",
    password: "",
    port: "",
    database: "",
  };
} else {
  MYSQL_CONF = {
    host: "127.0.0.1",
    user: "root",
    password: "xianhan@777",
    port: "3306",
    database: "youz",
  };
}

module.exports = { MYSQL_CONF };
