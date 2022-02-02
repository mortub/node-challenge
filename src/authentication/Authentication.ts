import { v4 as uuidv4 } from 'uuid';

export default class Authentication{
    static generateToken = () =>{
       const token = uuidv4();
       if(!token || token === ''){ throw {statusCode: 500, error:'Could Not Create Token'};}
       return token;
    }
}