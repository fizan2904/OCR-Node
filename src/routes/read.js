import tesseract from 'node-tesseract';
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';

const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../temp'));
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
const upload = multer({ storage: storage });

router.post('/', upload.any("upload_file"), (req, res, next) => {
	console.log(path.join(__dirname, req.files[0].originalname))
	tesseract.process(path.join(__dirname, '../temp' ,req.files[0].originalname),function(err, text) {
        if(err) { throw err; }
        req.output = text;
		return next()
    });
}, (req, res) => {
	fs.emptyDir(path.join(__dirname, '../temp'), err => {
		if(req.output == "" || req.output == undefined){
			res.render('output.html', {error: "Couldn't read the text give a valid input"});
		}else{
			console.log(req.output);
			res.render('output.html', {output: req.output});
		}
	});
});

export default router;