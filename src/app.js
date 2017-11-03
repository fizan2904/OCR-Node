import express from 'express';
import path from 'path';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import flash from 'connect-flash-plus';
import Session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.text({ type : 'text/html' }));
app.use(cookieParser());
app.use(Session({
	secret : '2746827346hjgdf762ufdvs6fuybi2eot2oh3iu',
	saveUninitialized : true,
	resave : true
}));
app.use(flash());
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('Error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});
app.use(express.static(path.join(__dirname, 'public')));

import api from './routes/api'
import index from './routes/index';
import read from './routes/read';

app.use('/read', read);
app.use('/api', api);

app.use('/test', (req, res) => {
	res.status(200).send({"message":"Everything's OK"})
});

app.use('/', index);

app.listen((process.env.PORT || 3000), () => {
	console.log("Server started at port 3000");
});