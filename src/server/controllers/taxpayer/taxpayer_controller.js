'use strict';

/**************************************************************
 * Taxpayer controller, methods for taxpayer routes           *
 *                                                            *
 * @author Enrique Martínez <enrique.martinez@compropago.com> *
 **************************************************************/

import multer from 'multer';
const upload = multer();

/**
 * Constant to map methods names and make it more clear
 *
 * @type {Object}
 */
export const methods = {
    CREATE: 'create'
};

/**
 * Controller methods
 *
 * @type {Object}
 */
export default {
    [methods.CREATE]: (req, res, next) => {
        return res.io({ code: 200, data: { data: 'ok' } });
    }
};
