/**
 * @description 班级管理
 * @author 爱呵呵
 */

const seq = require("../seq");
const { STRING, INTEGER } = require("../type");
const Grade = seq.define("grade", {
  grade_name: {
    type: STRING,
    allowNull: false,
    comment: "班级名",
  },
});

module.exports = Grade;
