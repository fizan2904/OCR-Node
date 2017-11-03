'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nodeTesseract = require('node-tesseract');

var _nodeTesseract2 = _interopRequireDefault(_nodeTesseract);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var storage = _multer2.default.diskStorage({
	destination: function destination(req, file, cb) {
		cb(null, _path2.default.join(__dirname, '../temp'));
	},
	filename: function filename(req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = (0, _multer2.default)({ storage: storage });

router.post('/', upload.any("upload_file"), function (req, res, next) {
	console.log(_path2.default.join(__dirname, req.files[0].originalname));
	_nodeTesseract2.default.process(_path2.default.join(__dirname, '../temp', req.files[0].originalname), function (err, text) {
		if (err) {
			throw err;
		}
		req.output = text;
		return next();
	});
}, function (req, res) {
	_fsExtra2.default.emptyDir(_path2.default.join(__dirname, '../temp'), function (err) {
		if (req.output == "" || req.output == undefined) {
			res.render('output.html', { error: "Couldn't read the text give a valid input" });
		} else {
			console.log(req.output);
			res.render('output.html', { output: req.output });
		}
	});
});

exports.default = router;