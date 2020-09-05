const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/add',recipeController.saveRecipe);

router.get('/get',recipeController.getRecipe);

module.exports = router;