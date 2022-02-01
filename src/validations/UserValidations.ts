import Joi from 'joi';
import IUser from '../interfaces/IUser';
import RegexConstants from '../utils/RegexConstants';
import InstitutionsController from '../controllers/InstitutionsController';

const institutionsController = new InstitutionsController();
const userSchema = Joi.object({
    Name: Joi.string().regex(RegexConstants.NAME_REGEX).required(),
    EmailAddress: Joi.string().regex(RegexConstants.EMAIL_REGEX).required(),
    Role: Joi.string().valid(...['student', 'academic', 'administrator']).required(),
    Password: Joi.string().required(),
});

export default class UserValidations {
    constructor() {}

    static async validateUser(userBody: IUser): Promise<void> {
        const { error, value } = userSchema.validate(userBody);
        if (error) {throw {statusCode:400, message:error.details[0].message};};
        const result = await UserValidations.isUserDomainInDomainList(userBody.EmailAddress);
        if (!result) {throw {statusCode:400, message:'Please Provide a valid Domain University Name in Email Adress'};};
    }

    static async isUserDomainInDomainList(emailAddress: string):Promise<boolean> {
        const domain = UserValidations.extractEmailDomainFromEmailAddress(emailAddress);
        const domains = await institutionsController.getAllInstitutionsEmailDomains();
        return domains.includes(domain);
    }

    static extractEmailDomainFromEmailAddress(emailAddress: string): string{
        const domain = emailAddress.substring(emailAddress.lastIndexOf("@") + 1);
        return domain;
    }

}