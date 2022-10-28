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
    const { pageSize = 20, pageIndex = 1 } = ctx.request.query;

    // 如果需要添加 搜索教室的条件就给 whereopt 添加值
    const whereOpt = {};
    const result = await Room.findAndCountAll({
      limmit: +pageSize,
      offset: +pageSize * +pageIndex,
      order: [["id", "desc"]],
      where: whereOpt,
    });

    const data = formatList(result);
    const total = result?.count;
    ctx.body = new SuccessModel({ data, total });
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
