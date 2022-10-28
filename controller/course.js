const { SuccessModel, ErrorModel } = require("../models/ResModel");
const { ParamsNotNull } = require("../models/ErrorInfo");
const { Course, User, Room, Grade } = require("../db/model");
const { formatList } = require("../utils");

class CourseCtl {
  async create(ctx) {
    const {
      course_name,
      course_user_id,
      course_grade_id,
      course_room_id,
      start_time,
      end_time,
      course_time,
    } = ctx.request.body;

    console.log(
      course_name,
      course_user_id,
      course_grade_id,
      course_room_id,
      start_time,
      end_time,
      course_time
    );
    // return;

    if (
      !course_name ||
      !course_user_id ||
      !course_grade_id ||
      !course_room_id ||
      !start_time ||
      !end_time ||
      !course_time
    ) {
      ctx.body = new ErrorModel(ParamsNotNull);
      return;
    }

    const result = await Course.create({
      course_name,
      course_user_id,
      course_grade_id,
      course_room_id,
      course_time,
      start_time,
      end_time,
    });

    let str = result.dataValues ? "课程创建成功" : "课程创建失败";
    ctx.body = new SuccessModel({ data: result.dataValues, message: str });
  }
  async select(ctx) {
    let { pageSize, pageIndex } = ctx.request.query;
    pageIndex = pageIndex ? +pageIndex - 1 : pageIndex;

    const whereOpt = {};

    const result = await Course.findAndCountAll({
      limit: +pageSize,
      offset: +pageSize * +pageIndex,
      order: [["id", "desc"]],
      where: whereOpt,
      include: [
        {
          model: User,
          attributes: ['nickname', 'sex', 'grade_id']
        },
        {
          model: Grade,
          attributes: ['grade_name']
        },
        {
          model: Room,
          attributes: ['room_name', 'room_address', 'room_picture']
        }
      ]
    });

    const data = formatList(result);
    const total = result?.count;
    ctx.body = new SuccessModel({ data, total });
  }
}

module.exports = new CourseCtl();
