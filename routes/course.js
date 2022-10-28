const router = require("koa-router")();
const { create, select } = require("../controller/course");


router.prefix("/course");


router.post("/create", create);
router.get('/list', select)

module.exports = router;
