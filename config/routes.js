const router = require('express').Router()

const chickenShopController = require('../controllers/chickenShops')

router.route('/chickenshops')
  .get(chickenShopController.index)
  .post(chickenShopController.create)

router.route('/chickenshops/:id')
  .get(chickenShopController.show)

module.exports = router
