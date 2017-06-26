'use strict';

/**
 * Web entry point
 *
 * @author Victor Huerta <victor@compropago.com, vhuertahnz@gmail.com>
 */
import cluster from 'cluster';

import config from './../config';
import logger from './../log';
import app from './app';

/**
 * Start the server and export a promise to handle it if nesesary
 */
const startServer = () => new Promise((resolve, reject) => {
  let port = config.server.port || 3000;
  let host = config.server.host || '0.0.0.0';

  let server = app.listen(port, host, () => {
    logger.info(`App started, listen connections on port: ${host}:${port}`);
    resolve(`${host}:${port}`);
  });

  server.on('error', err => {
    reject(err);
    process.exit();
  });
});

export default startServer;