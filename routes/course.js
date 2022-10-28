const router = require("koa-router")();
const { create } = require("../controller/course");
const koaFrom = require('formidable-upload-koa')  // 使用的插件获取的图片文件

router.prefix("/course");


router.post("/create", create);


module.exports = router;
