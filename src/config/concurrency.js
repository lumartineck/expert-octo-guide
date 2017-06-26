'use strict';

/**************************************************************************
 * Config file for concurrency params                                     *
 *                                                                        *
 * @author Victor Huerta <victor@compropago.com.mx, vhuertahnz@gmail.com> *
 **************************************************************************/

export default {
  web: parseInt(process.env.CONCURRENCY_WEB) || 3,
};
