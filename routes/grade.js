const router = require("koa-router")();
const { create, select } = require("../controller/grade");


router.prefix("/grade");

router.post("/create", create);
router.get("/list", select);


module.exports = router;
