/**
 * @description 教室管理
 * @author 爱呵呵
 */

const seq = require("../seq");
const { STRING, INTEGER } = require("../type");
const Room = seq.define("room", {
  room_name: {
    type: STRING,
    allowNull: false,
    comment: "教室名",
  },
  room_type: {
    type: STRING,
    allowNull: false,
    comment: "教室类型",
  },
  room_address: {
    type: STRING,
    allowNull: false,
    comment: "教室地址",
  },
  room_picture: {
    type: STRING,
    allowNull: false,
    comment: "教室图片",
  },
});

module.exports = Room;
