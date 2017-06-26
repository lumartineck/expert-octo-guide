'use strict';

/************************************************
 * Routes for the module ping                   *
 *                                              *
 * @author Victor Huerta <vhuertahnz@gmail.com> *
 ************************************************/
import ping from './routes/ping';

import { Router } from 'express';

const router = Router();

/**
 * Route to map:
 *  get: /welcome/
 */
router.use('/', ping);

export default router;
