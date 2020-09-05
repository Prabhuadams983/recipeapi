const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./database/db');
const ApplicationConstants = require('./global/constants/ApplicationConstants');
const ApplicationErrorHandler = require('./global/ErrorHandler/ApplicationErrorHandler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./router/router'));
app.use(ApplicationErrorHandler);
app.listen(3000,() => {
    console.log("Express is running on 3000");
});




