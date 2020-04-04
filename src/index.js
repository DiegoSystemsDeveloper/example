const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middleawares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', require('./routes/routes'));

//listen on port
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});