const { SuccessModel, ErrorModel } = require("../models/ResModel");
const { ParamsNotNull } = require("../models/ErrorInfo");
const { Grade, User } = require("../db/model");
const { formatList } = require("../utils");
const Sequelize = require("sequelize");

class RoomCtl {
  async create(ctx) {
    const { grade_name } = ctx.request.body;

    if (!grade_name) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    const result = await Grade.create({
      grade_name,
    });

    let str = result.dataValues ? "班级创建成功" : "班级创建失败";
    ctx.body = new SuccessModel({ data: result.dataValues, message: str });
  }
  async select(ctx) {
    let { pageSize = 20, pageIndex = 1 } = ctx.request.query;
    pageIndex = +pageIndex ? +pageIndex - 1 : +pageIndex;

    const result = await Grade.findAndCountAll({
      limit: +pageSize,
      offset: +pageSize * +pageIndex,
      order: [["id", "desc"]],
    });

    const total = result.count;
    ctx.body = new SuccessModel({ data: formatList(result), total });
  }
}

module.exports = new RoomCtl();
