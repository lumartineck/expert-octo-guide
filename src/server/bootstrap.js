'use strict';

/*******************************************************************************
 * Bootstrap files to promisify all the things needed before start the server, *
 * like database connections                                                   *
 *                                                                             *
 * @author Victor Huerta <vhuertahnz@gmail.com>                                *
 *******************************************************************************/

import models from './../app/model';

import mongoose from './../connections/mongoose';
import { connection as redisRateLimit } from './../connections/redis_ratelimit';

export default() => Promise.all([
  mongoose,
  models,
  redisRateLimit,
]);
