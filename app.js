const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine','ejs');
app.set('views','views');
const route = require('./routes/route');

app.use(route.routes);


app.listen(3000);
