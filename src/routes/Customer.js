const express= require('express');
const router=express.Router();

const custemerController =require('../controllers/customerControler')

router.get('/',custemerController.list);
router.get('/add',custemerController.save);

module.exports=router;