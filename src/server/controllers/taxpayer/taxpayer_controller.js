'use strict';

/**************************************************************
 * Taxpayer controller, methods for taxpayer routes           *
 *                                                            *
 * @author Enrique Martínez <enrique.martinez@compropago.com> *
 **************************************************************/

import { default as TaxpayerService, ErrorServiceTaxpayer } from './../../../app/service/taxpayer_service';
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
        const { map, body, files } = req;
        const cerFirma = files.cerFirma ? files.cerFirma[0] : null,
            keyFirma = files.keyFirma ? files.keyFirma[0] : null,
            cerCsd = files.cerCsd ? files.cerCsd[0] : null,
            keyCsd = files.keyCsd ? files.keyCsd[0] : null;

        if (cerFirma)
            body.cer_efirma = cerFirma.buffer.toString('base64');
        if (keyFirma)
            body.key_efirma = keyFirma.buffer.toString('base64');
        if (cerCsd)
            body.cer_csd = cerCsd.buffer.toString();
        if (keyCsd)
            body.key_csd = keyCsd.buffer.toString();
        body.regimen_fiscal= body.regimenFiscal;
        body.password_efirma= body.passwordFirma;

        return TaxpayerService.create('something', body, map)
            .then(result => {
                console.log(result);
                res.io({
                    code: result.code,
                    message: result.message,
                    data: { data: result.response }
                });
            })
            .catch(err => {
                return res.io({
                    code: err.code,
                    message: err.message,
                    data: { errors: err.errors }
                });
            });
    }
};
