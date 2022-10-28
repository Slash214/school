const { SuccessModel, ErrorModel } = require("../models/ResModel");
const { ParamsNotNull } = require("../models/ErrorInfo");
const { User } = require("../db/model");
const { formatList } = require("../utils");

class UserCtl {
  async login(ctx) {
    const { username, password } = ctx.request.body;
    //  判断参数不能为空
    if (!username || !password) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    //  使用sequelize查询数据库
    const result = await User.findOne({
      where: { username, password },
    });

    // 没查询到 返回的就是null
    if (result === null) {
      ctx.body = new SuccessModel({ data: [], message: "没有查询到用户" });
      return;
    }

    ctx.body = new SuccessModel({ data: result.dataValues });
  }
  async register(ctx) {
    const { username, nickname, password, level, sex = 1, gread_id } = ctx.request.body;

    if (!username || !nickname || !password || !level || !gread_id || !sex) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }
    // level 1 为学生  2为老师  3 为管理员
    // 密码需要加密 存储到数据库， 我这里为了简单就没加密的
    const result = await User.create({
      username,
      nickname,
      password,
      level,
      sex,
      gread_id
    });

    console.log(result)
    const str = result.dataValues ? "注册成功" : "注册失败";
    ctx.body = new SuccessModel({ data: result.dataValues, message: str });
  }
  async select(ctx) {
    let {
      pageSize = 20,
      pageIndex = 1,
      level,
      grade_id,
    } = ctx.request.query;

    pageIndex = pageIndex ? +pageIndex - 1 : pageIndex;
    const whereOpt = {};
    if (level) whereOpt["level"] = level;
    if (grade_id) whereOpt["grade_id"] = grade_id;

    const result = await User.findAndCountAll({
      limit: +pageSize,
      offset: +pageSize * +pageIndex,
      order: [["id", "desc"]],
      where: whereOpt,
    });

    const data = formatList(result);
    const total = result.count;
    ctx.body = new SuccessModel({ data, total });
  }
  async updates(ctx) {
    const { id, password, nickname, level } = ctx.request.body;

    if (!id) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    const updateData = { password, nickname, level };
    const whereOpt = { id };

    const result = await User.update(updateData, {
      where: whereOpt,
    });

    let str = result[0] > 0 ? "更新成功" : "更新失败";
    ctx.body = new SuccessModel({ message: str, data: result });
  }
  async remove(ctx) {
    const { id } = ctx.request.query;
    if (!id) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    // 其实可以做软删除
    const result = await User.destroy({
      where: { id },
    });

    // 删除失败就是SQL出问题了
    let str = result > 0 ? "删除成功" : "删除失败";
    ctx.body = new SuccessModel({ message: str, data: result });
  }
}
module.exports = new UserCtl();
