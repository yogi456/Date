const express = require('express');
const router  = express.Router();
const controller = require('../controllers/controller')

router.get('/',controller.getHome);

router.post('/submit-t0',controller.get_t0);

router.post('/submit-t1',controller.get_t1);


exports.routes = router;
