const Recipe = require('../model/RecipeModel');
const ApplicationConstants = require('../global/constants/ApplicationConstants');
const ServiceError = require('../global/ErrorHandler/ServiceError');

exports.saveRecipe = async (data,res,next) =>{
    try{
        const recipe = await Recipe.create(data);
        if(recipe){
            res.status(200).send({
                'status':200,
                'msg':ApplicationConstants.RECIPE_ADDED
            })
        }
    }catch(e){
        next(new ServiceError(e))
    }
}

exports.getRecipe = async (qParams,res,next) => {
    var query = {};
    const {category,type,name} = qParams;
    try{
        if(category){
           query['category']  = category;
        }
        if(type){
            query['type'] = type;
        }
        if(name){
            query['name'] = name;
        }

        const recipe = await Recipe.find(query);
        if(recipe.length > 0){
            res.status(200).send({
                'status':200,
                'recipes':recipe
            })
        }else{
            throw new Error(ApplicationConstants.NO_RECIPE_FOUND);
        }
    }catch(e){
        next(new ServiceError(e));
    }
}