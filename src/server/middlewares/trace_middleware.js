'use strict';

import uuid from 'node-uuid';

export default (req, res, next) => {
  let token = req.headers['x-cp-trace'] || uuid.v4();
  // Send to log the X-Trace-Token
  res.header('X-CP-Trace', token);
  next();
};
