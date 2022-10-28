const { SuccessModel, ErrorModel } = require("../models/ResModel");
const { ParamsNotNull } = require("../models/ErrorInfo");
const { Room } = require("../db/model");
const { formatList } = require("../utils");
const { saveFile } = require("../utils/upload");

class RoomCtl {
  async create(ctx) {
    const { room_name, room_picture, room_address, room_type } =
      ctx.request.body;

    if (!room_name || !room_picture || !room_address || !room_type) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    const result = await Room.create({
      room_name,
      room_picture,
      room_address,
      room_type,
    });

    let str = result.dataValues ? "增加成功" : "增加失败";
    ctx.body = new SuccessModel({ data: result.dataValues, message: str });
  }
  async select(ctx) {
    let { pageSize = 20, pageIndex = 1, state } = ctx.request.query;
    pageIndex = pageIndex ? +pageIndex - 1 : pageIndex;
    const whereOpt = {};
    if (state && state !== "0") {
      whereOpt["state"] = state;
    }
    // if (state || state !== 0)
    // 如果state 为 1 表示 获取 所有空教室，如果为2 表示 获取所有 正在被占用的教室
    const result = await Room.findAndCountAll({
      limit: +pageSize,
      offset: +pageSize * +pageIndex,
      order: [["id", "desc"]],
      where: whereOpt,
    });

    const data = formatList(result);
    const total = result?.count;
    ctx.body = new SuccessModel({ data, total });
  }
  async updates(ctx) {
    let { state, id, room_name, room_address, room_picture } = ctx.request.body;

    const updateData = { room_name, room_address, room_picture, state };
    const whereOpt = { id };

    const result = await Room.update(updateData, {
      where: whereOpt,
    });

    let str = result[0] > 0 ? "更新成功" : "更新失败";
    ctx.body = new SuccessModel({ message: str, data: result });
  }
  async imgUpload(ctx) {
    const file = ctx.req.files["file"]; // 上传的参数名file
    // console.log(file.name)
    // console.log(file instanceof Object)
    if (!file.size || !file.name) {
      ctx.body = new ErrorModel(ImgFileNotNull);
      return;
    }
    const { size, path, name, type } = file;
    let url = await saveFile({
      name,
      type,
      size,
      filePath: path,
    });

    ctx.body = new SuccessModel({ data: url });
  }
}

module.exports = new RoomCtl();
