const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/recipe",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Connected to Recipe Database");
});
db.on('error',(error) =>{
    console.log(error);
});

db.on('close',()=>{
    console.log("MongoDB connection closed");
});