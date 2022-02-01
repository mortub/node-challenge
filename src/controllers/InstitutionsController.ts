import { NextFunction, Request, Response } from 'express';
import Institution from '../models/Institution';

export default class InstitutionsController{
    getAllInstitutionsEmailDomains = async () =>{
        try{
            const all = await Institution.find({});
            return all.map((institution) => institution.EmailDomain);
        } catch(error){
            console.log(error);
            throw error;
        }
    }
}
