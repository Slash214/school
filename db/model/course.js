/**
 * 课程管理
 */
const seq = require("../seq");
const { STRING, INTEGER } = require("../type");
const Course = seq.define("course", {
  course_name: {
    type: STRING,
    allowNull: false,
    comment: "课程名",
  },
  course_user_id: {
    type: INTEGER,
    allowNull: false,
    comment: "课程老师 ID关联",
  },
  course_grade_id: {
    type: INTEGER,
    allowNull: false,
    comment: "课程班级 班级ID",
  },
  course_room_id: {
    type: INTEGER,
    allowNull: false,
    comment: "课程教室 教室ID",
  },
});

module.exports = Course;
