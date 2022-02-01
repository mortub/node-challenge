import { Request, Response } from 'express';
import mongoose from 'mongoose';
import IUser from '../interfaces/IUser';
import User from '../models/User';
import UserValidations from '../validations/UserValidations';

export default class UsersController {
    createUserController = async (req: Request, res: Response) =>{
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
        console.log(createdUser,'createdUser')
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
}
