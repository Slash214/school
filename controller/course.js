const { SuccessModel, ErrorModel } = require("../models/ResModel");
const { ParamsNotNull } = require("../models/ErrorInfo");
const { Course } = require("../db/model");
const { formatList } = require("../utils");

class RoomCtl {
  async create(ctx) {
	const { course_name, course_user_id, course_grade_id, course_room_id } = ctx.request.body
	
    if (!course_name || !course_user_id || !course_grade_id || !course_room_id) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    const result = await Room.create({
		course_name,
		course_user_id,
		course_grade_id,
		course_room_id
    });

	  let str = result.dataValues ? "课程创建成功" : "课程创建失败";
	  ctx.body = new SuccessModel({ data: result.dataValues, message: str })
  }
  async select(ctx) {}
}

module.exports = new RoomCtl();
