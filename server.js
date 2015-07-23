var express = require('express'),
    router = require('./routes/router'),
    hbs = require('./config/handlebars'),
    root = __dirname + '/dist';

var app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(express.static(root));
app.use('/', router);

app.listen(3000);