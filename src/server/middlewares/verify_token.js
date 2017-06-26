import AuthService from './../../app/service/auth_service';


export default (req, res, next) => {
  console.log(req.get('X-Auth-Token'));

  next();
};