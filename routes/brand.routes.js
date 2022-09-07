const { Router } = require("express")
const router = Router()
const {brandControllers} = require("../controllers/brand.controllers")

router.get("/brands",brandControllers.get_brands)
router.post("/brands", brandControllers.add_brand)
router.delete("/brands", brandControllers.delete_brand)

module.exports = router;