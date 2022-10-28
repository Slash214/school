const { SuccessModel, ErrorModel } = require("../models/ResModel");
const { ParamsNotNull } = require("../models/ErrorInfo");
const { Grade, User } = require("../db/model");
const { formatList } = require("../utils");
const Sequelize = require('sequelize')

class RoomCtl {
  async create(ctx) {
    const { grade_name, grade_user } = ctx.request.body;

    console.log("grade_name", grade_name, grade_user);
    if (!grade_name || !grade_user) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    // 先去判断 是否存在班级
    const [user, created] = await Grade.findOrCreate({
      where: { grade_name, grade_user },
    });

    console.log(user, created);
    ctx.body = new SuccessModel({ message: "测试" });
    return;

    const result = await Grade.create({
      grade_name,
      grade_user,
    });

    let str = result.dataValues ? "班级创建成功" : "班级创建失败";
    ctx.body = new SuccessModel({ data: result.dataValues, message: str });
  }
  async select(ctx) {
    let { grade_name, pageSize = 20, pageIndex = 1 } = ctx.request.query;
    // if (!id) {
    //   ctx.body = new ErrorModel(ParamsNotNull);
    //   return;
    // }
    pageIndex = +pageIndex ? +pageIndex - 1 : +pageIndex;
    const whereOpt = { grade_name };
    

    const total = result.count;
    ctx.body = new SuccessModel({ data: formatList(result), total });
  }
}

module.exports = new RoomCtl();
