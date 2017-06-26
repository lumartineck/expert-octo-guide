'use strict';

/************************************************
 * Ping Controller, methods for ping routes     *
 *                                              *
 * @author Victor Huerta <vhuertahnz@gmail.com> *
 ************************************************/

/**
 * Constant to map methods names and make it more clear
 *
 * @type {Object}
 */
export const methods = {
  GET_INDEX: 'getIndex'
};

/**
 * Controller methods
 *
 * @type {Object}
 */
export default {
  [methods.GET_INDEX]: (req, res, next) => {
    return res.io({ code: 200, data:  { pong: 'pong' } });
  }
};
