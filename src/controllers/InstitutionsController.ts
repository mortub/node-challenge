import Institution from '../models/Institution';

export default class InstitutionsController{
    getAllInstitutionsEmailDomains = async (): Promise<string[]> =>{
        try{
            const all = await Institution.find({});
            return all.map((institution) => institution.EmailDomain);
        } catch(error){
            console.log(error);
            throw error;
        }
    }
}
