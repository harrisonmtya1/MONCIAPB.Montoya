const express=require('express')


const router= express.Router();

const bodyParser = require('body-parser');
router.use(express.json());
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
router.use(bodyParser.urlencoded({ extended: false }));