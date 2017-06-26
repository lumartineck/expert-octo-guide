'use strict';

/**************************************************************
 * Routes for taxpayer module                                 *
 *                                                            *
 * @author Enrique Martínez <enrique.martinez@compropago.com> *
 **************************************************************/

import { default as controller, methods } from './../controllers/taxpayer/taxpayer_controller';

import { Router } from 'express';

const router = Router();

router.post('/taxpayers', controller[methods.CREATE]);

export default router;
