'use strict';

/**************************************************************************
 * Config file for connections                                            *
 *                                                                        *
 * @author Victor Huerta <victor@compropago.com.mx, vhuertahnz@gmail.com> *
 **************************************************************************/

export default {
  mongo:  {
    url: process.env.MONGODB_URI || 'mongodb://localhost/ms-auth?maxPoolSize=20',
    debug: process.env.MONGO_DEBUG && process.env.MONGO_DEBUG === 'true'
  },
  redisRateLimit: {
    url: process.env.REDIS_RATELIMIT_URL || 'redis://localhost:6379/1',
  },
};
