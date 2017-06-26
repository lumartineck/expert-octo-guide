import config from './../../config';

export default (req, res, next) => {
  const auth = req.headers['authorization'];
  var credentials = new Buffer(auth.split(" ").pop(), "base64").toString("ascii").split(":");

  return config.security.apiKey === credentials[0] ?
    next() :
    res.io({ code: 403, message: 'error.invalid_apikey' });
};