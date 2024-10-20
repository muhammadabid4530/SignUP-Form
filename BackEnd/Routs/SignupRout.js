const express=require('express');
const Router=express.Router();
const app=express();
const SignupData=require('../Controllers/SignupController');
const SigninData=require('../Controllers/SigninController');
const uploadFile=require('../Controllers/uploadFile');
const ReadData=require('../Controllers/Read');
const uploadData=require('../Multer/Multer')
const studentData=require('../Controllers/StudentController');
const outputData=require('../Controllers/output')

Router.route('/signUp').post(SignupData);
Router.route('/signIn/:userName/:password').get(SigninData);
Router.route('/read').get(ReadData);
Router.route('/studentData').post(studentData)
Router.route('/output').post(outputData)

module.exports=Router 