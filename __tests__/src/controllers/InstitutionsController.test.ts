import InstitutionsController from '../../../src/controllers/InstitutionsController';
import mongoose  from "mongoose";
import config from '../../../src/config/dotenvConfig';

describe('InstitutionsController', () =>{
    let institutionsController : InstitutionsController;
    beforeAll(async ()=>{
        await mongoose.connect(config.mongo.url);
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully");
        });
        institutionsController = new InstitutionsController();
    });

    afterAll(()=>{
        mongoose.connection.close();
    });

    it('getAllInstitutionsEmailDomains should return all domain from the list',  async () =>{
        const DOMAINS_LIST: string[] = [
            'technion.ac.il',
            'huji.ac.il',
            'biu.ac.il',
            'tau.ac.il',
            'haifa.ac.il',
            'bgu.ac.il',
            'openu.ac.il',
            'ariel.ac.il',
            'runi.ac.il'
        ];
        const domains: string[] = await institutionsController.getAllInstitutionsEmailDomains();
        expect(domains).toStrictEqual(DOMAINS_LIST);
    })
})