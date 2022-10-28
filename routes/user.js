const router = require("koa-router")();
const {
  login,
  register,
  select,
  remove,
  updates,
} = require("../controller/user");

router.prefix("/user");

router.post("/create", register);
router.post("/login", login);
router.get("/list", select);
router.put("/update", updates);
router.get("/delete", remove);

module.exports = router;
