'use strict';

/**************************************************************
 * Taxpayer methods                                           *
 *                                                            *
 * @author Enrique Martínez <enrique.martinez@compropago.com> *
 **************************************************************/
import config from './../../config';
import request from 'request-promise';
import { isEmpty } from 'lodash';

/**
 * Custom error throwed by call rest full service 
 *
 * @class ErrorServiceTaxpayer
 * @extends {Error}
 */
class ErrorServiceTaxpayer extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        this.code = 401;
    }
}

const service = {
    /**
     * Register a new taxpayer
     *
     * @returns {Promise} Promise than resolves if the taxpayer is saved
     */
    create(something, body, map) {
        //const url = `${config.service.accounts.endpoint}/service/accounts/${accountId}/comments`,
        const url = 'https://www.contabilizate.com/compropago/api/contribuyentes',
        headers = {
            'Accept': 'application/x-www-form-urlencoded',
            'Content-type': 'application/x-www-form-urlencoded',
            'Api-Key': 'a43f72e6-6baf-447c-9c40-0b5ecdcb66dd'
        };

        return request.post({
                url,
                headers,
                form: body
            })
            .catch(err => {
                const error = JSON.parse(err.error);
                
                if (error && error.code)
                    return Promise.reject(error);

                return Promise.reject({
                    code: 500,
                    object: 'taxpayer.create',
                    status: 'error',
                    message: 'error.ms_taxpayer_internal_error',
                    request: new Date().getTime(),
                    url: 'taxpayer'
                });
            });
    }
}

const instance = Object.create(service);

export {
    instance as default,
    ErrorServiceTaxpayer
};