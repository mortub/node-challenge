import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Authentication from '../authentication/authentication';
import IUser from '../interfaces/IUser';
import User from '../models/User';
import UserToken from '../models/UserToken';
import UserValidations from '../validations/UserValidations';

export default class UsersController {
    createUserHandler = async (req: Request, res: Response) =>{
        try {
            const createdUser = await this.createUser(req.body);
            return res.status(201).send({result: createdUser});
        } catch (error : any) {
            let statusCode = error.statusCode? error.statusCode : 500;
            return res.status(statusCode).send({result: error.message});
        }
    }

    createUser = async (requestBody: any) =>{
        await UserValidations.validateUser(requestBody);
        const createdUser = await this.saveUserInDB(requestBody);
        return createdUser;
    }

    saveUserInDB = async (user: IUser) => {
        const dbUser = new User({
            _id: new mongoose.Types.ObjectId(),
            ...user
        });
        const createdUser = await dbUser.save();
        return createdUser;
    }

    signinHandler = async (req: Request, res: Response) =>{
        try {
            const tokenCreated = await this.signin(req);
            return res.status(201).send({result: tokenCreated});
        } catch (error : any) {
            let statusCode = error.statusCode? error.statusCode : 500;
            return res.status(statusCode).send({result: error.message});
        }
    }

    signin = async (req : Request)=>{
        const user = await this.getEmailAddressFromReqBody(req.body);
        const tokenCreated = await this.saveTokenInDB(user.EmailAddress);
        return tokenCreated;
    }

    getEmailAddressFromReqBody = async (reqBody: any) => {
        const { EmailAddress } = reqBody || {};
        if (!EmailAddress) { throw { statusCode: 400, message: 'No EmailAdress Provided' }; }
        const user = await this.findUserEmailInUsers(EmailAddress);
        if (!user) { throw { statusCode: 400, message: 'No User Found With That Email Address' }; }
        return user;
    }

    findUserEmailInUsers = async (email: string)=>{
       const user = await User.findOne({EmailAddress: email});
       return user;
    }

    saveTokenInDB = async (email: string) => {
        const token = Authentication.generateToken(email);
        const userToken = new UserToken({
            _id: new mongoose.Types.ObjectId(),
            Token: token,
            EmailAddress: email
        });
        const createdToken = await userToken.save();
        return createdToken;
    }


}
