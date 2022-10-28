const seq = require("../seq");
const { STRING, INTEGER } = require("../type");

const User = seq.define("user", {
  username: {
    type: STRING,
    allowNull: false,
    comment: "账号",
  },
  level: {
    type: INTEGER,
    defaultVaues: 1,
    comment: "权限等级 1为学生 2为教师 3为超级管理员 还可以添加",
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: "密码 会加密",
  },
  nickname: {
    type: STRING,
    allowNull: false,
    comment: "昵称",
  },
});

module.exports = User;
