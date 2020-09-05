const ControllerError = require("../global/ErrorHandler/ControllerError");
const recipeService = require('../services/recipeService');
const ApplicationConstants = require("../global/constants/ApplicationConstants");
exports.saveRecipe = (req,res,next)=>{
    try{
        if(Object.keys(req.body).length === 0){
            throw new Error(ApplicationConstants.NO_BODY);
        }else{
            recipeService.saveRecipe(req.body,res,next);
        }
    }catch(e){
        next(e);
    }
}

exports.getRecipe = (req,res,next) =>{
    try{
        recipeService.getRecipe(req.query,res,next);
    }catch(e){
        next(e);
    }
}