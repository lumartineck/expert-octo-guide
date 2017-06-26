'use strict';

/************************************************
 * Export the express app                       *
 *                                              *
 * @author Victor Huerta <vhuertahnz@gmail.com> *
 ************************************************/

import express from 'express';
import Promise from 'bluebird';

// Replace promises with bluebird
global.Promise = Promise;

/**
 * Configure passport strategies
 */

const app = express();

/***************
 * Globals     *
 ***************/
import logger from './../log';

app.set('logger', logger);

/***************
 * Middlewares *
 ***************/
import bodyParser from 'body-parser';
import io from './middlewares/io_middleware';
import trace from './middlewares/trace_middleware';
import rateLimit from './middlewares/ratelimit_hostname_middleware';
import error from './middlewares/error_middleware';

app.use(io);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(trace);
app.use(rateLimit);

/**************
 * App routes *
 **************/

import routes from './routes';

app.use(routes);

// 404 Routes
app.use((req, res, next) => res.io({ code: 404 }));

// THIS MANDATORY NEEED TO BE THE LAST MIDDLEWARE
// DON USE MIDDLEWARES AFTER THIS
app.use(error);
export default app;
