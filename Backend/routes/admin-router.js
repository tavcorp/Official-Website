import express from 'express';


const router = express.Router();

import { getAllUsers, getAllContactForm } from '../controllers/admin-controller.js';
// import {  } from '../controllers/admin-controller.js';

router.route('/users').get(getAllUsers);
router.route('/contact').get(getAllContactForm);


export default router;