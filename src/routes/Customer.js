const express= require('express');
const router=express.Router();

const custemerController =require('../controllers/customerControler')

router.get('/',custemerController.list)
module.exports=router;