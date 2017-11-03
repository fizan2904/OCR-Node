'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connectFlashPlus = require('connect-flash-plus');

var _connectFlashPlus2 = _interopRequireDefault(_connectFlashPlus);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _read = require('./routes/read');

var _read2 = _interopRequireDefault(_read);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('views', _path2.default.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use((0, _morgan2.default)('dev'));
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.text({ type: 'text/html' }));
app.use((0, _cookieParser2.default)());
app.use((0, _expressSession2.default)({
	secret: '2746827346hjgdf762ufdvs6fuybi2eot2oh3iu',
	saveUninitialized: true,
	resave: true
}));
app.use((0, _connectFlashPlus2.default)());
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('Error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/read', _read2.default);
app.use('/api', _api2.default);
app.use('/', _index2.default);

app.listen(process.env.PORT || 3000, function () {
	console.log("Server started at port 3000");
});