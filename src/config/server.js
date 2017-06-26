'use strict';

/**************************************************************************
 * Configuration server constants                                         *
 *                                                                        *
 * @author Victor Huerta <vhuertahnz@gmail.com>                           *
 **************************************************************************/

export default {

  /**
   * Default service configuration
   *
   * @type {Object}
   */
  baseUrl: process.env.BASE_URL || 'http://localhost:8080/#/',
  port: process.env.PORT || '4000',
  host: process.env.HOST || '0.0.0.0'
};
