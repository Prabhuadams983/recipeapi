const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('./database/db');
const ApplicationErrorHandler = require('./global/ErrorHandler/ApplicationErrorHandler');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./router/router'));
app.use(ApplicationErrorHandler);
app.listen(3000,() => {
    console.log("Express is running on 3000");
});




