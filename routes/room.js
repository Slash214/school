const router = require("koa-router")();
const { select, create, imgUpload, updates } = require("../controller/room");
const koaFrom = require('formidable-upload-koa')  // 使用的插件获取的图片文件

router.prefix("/room");

router.get("/list", select);
router.post("/create", create);
router.put("/update", updates);
router.post('/imgUpload', koaFrom(), imgUpload)

module.exports = router;
