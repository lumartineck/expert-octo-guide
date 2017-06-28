'use strict';

/**************************************************************
 * Routes for taxpayer module                                 *
 *                                                            *
 * @author Enrique Martínez <enrique.martinez@compropago.com> *
 **************************************************************/

import { default as controller, methods } from './../controllers/taxpayer/taxpayer_controller';

import { Router } from 'express';
import Multer from 'multer';

const router = Router();
const upload = Multer();

const filesUpload = upload.fields([
    { name: 'cerFirma', maxCount: 1 }, 
    { name: 'keyFirma', maxCount: 1 },
    { name: 'cerCsd', maxCount: 1 },
    { name: 'keyCsd', maxCount: 1 }])
router.post('/taxpayers', filesUpload, controller[methods.CREATE]);

export default router;
