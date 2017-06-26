'use strict';

/************************************************
 * Routes for the ping module                   *
 *                                              *
 * @author Victor Huerta <vhuertahnz@gmail.com> *
 ************************************************/

import { default as controller, methods } from './../controllers/ping/ping_controller';

import { Router } from 'express';

const router = Router();

/**
 * Route to map:
 *  get: /welcome/
 */
router.get('/ping', controller[methods.GET_INDEX]);

export default router;
