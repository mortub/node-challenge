import UsersController from "../../../src/controllers/UsersController";

describe('UsersController', () => {
    let usersController: UsersController;
    beforeAll(() => {
        usersController = new UsersController();
    })

    it('should return the created user for a valid user', async () => {
        const body = {
            "Name": "Mor",
            "Role": "student",
            "EmailAddress": "mor@huji.ac.il",
            "Password": "123456"
        }
        const createdUser = await usersController.createUser(body);

        expect(createdUser).toHaveBeenCalledWith
            (expect.objectContaining({
                "Name": "Mor",
                "Role": "student",
                "EmailAddress": "mor@huji.ac.il",
                "Password": "123456",
            })
        );

    })

    it('should throw an error for a ivalid user field', async () => {
        const body = {
            "Name": "Mor",
            "Role": "teacher",
            "EmailAddress": "mor@huji.ac.il",
            "Password": "123456"
        }
        try{
            const createdUser = await usersController.createUser(body);
            expect(true).toBe(false);
        }catch(error:any){
            expect(error.message).toBe("\"Role\" must be one of [student, academic, administrator]");
        }

    })

    it('should throw an error for a missing required user field', async () => {
        const body = {
            "Role": "student",
            "EmailAddress": "mor@huji.ac.il",
            "Password": "123456"
        }
        try{
            const createdUser = await usersController.createUser(body);
            expect(true).toBe(false);
        }catch(error:any){
            expect(error.message).toBe("\"Name\" is required");
        }

    })

})