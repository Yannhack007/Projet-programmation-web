const express = require('express');
const router = express.Router();
const planController = require('../controllers/plan.controller');

router.post('/create', planController.createPlan);

router.get('/', planController.listPlan);

module.exports = router;