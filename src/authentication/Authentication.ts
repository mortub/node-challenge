import jwt from 'jwt-simple';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import UserToken from '../models/UserToken';
import config from '../config/dotenvConfig';

export default class Authentication {
  static generateToken = (payload: string) => {
    const token = jwt.encode(payload, config.jwtSecret);
    if (!token || token === '') { throw { statusCode: 500, error: 'Could Not Create Token' }; }
    return token;
  }

  static createBearerStrategy = () => {
    return new BearerStrategy(function (token, done) {
      try {
        return Authentication.findTokenInDB(token, done);
      } catch (err) {
        return done(null, false);
      }
    })
  }

  static findTokenInDB = (token: string, done: any) => {
    const decoded = jwt.decode(token, config.jwtSecret);
    UserToken.findOne({ email: decoded.sub }, function (err: any, user: any) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
}