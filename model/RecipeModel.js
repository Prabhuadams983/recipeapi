const mongoose = require('mongoose');
const { text } = require('body-parser');

const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    steps:{
        type:String
    }
});

recipeSchema.index({name:'text'});

module.exports = mongoose.model('Recipe',recipeSchema);