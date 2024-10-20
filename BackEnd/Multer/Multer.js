const express=require('express');
const Multer=require('multer');

const MulterData = Multer({
    storage: Multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "../upload");
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
}).single('file');
const uploadData = Multer({ storage:MulterData })
module.exports=uploadData;