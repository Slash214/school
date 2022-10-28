/**
 * @description 数据模型入口文件 统一导出
 * @author 爱呵呵
 */
const User = require("./user");
const Course = require("./course");
const Room = require("./room");
const Grade = require("./grade");
const UserGrade = require('./UserGrade');


// 课程关联教室
Course.belongsTo(Room, {
  foreignKey: "course_room_id",
});

// 课程关联用户
Course.belongsTo(User, {
  foreignKey: "course_user_id",
});

// 课程关联班级
Course.belongsTo(Grade, {
  foreignKey: "course_grade_id",
});


// 用户关链班级
User.hasMany(UserGrade, {
  foreignKey: 'user_id'
})
UserGrade.belongsTo(User, {
  foreignKey: 'grade_id'
})
Grade.belongsTo(UserGrade, {
  foreignKey: "user_id",
  targetKey: "grade_id"
})

module.exports = {
  User,
  Grade,
  Room,
  Course,
  UserGrade
};
