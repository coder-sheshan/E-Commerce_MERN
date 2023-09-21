const express = require('express');
const router = express.Router();
const Controller = require('../Controller/controller');


router.get('/getproducts',Controller.getProducts);
router.post('/createproducts',Controller.newProducts);




module.exports = router;