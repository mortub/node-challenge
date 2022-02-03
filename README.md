# Node Challenge

This project allows you to create and sign in a user.
## Technologies:
In this project I used Node js with Typescript,along with the express framework.
For a database I used MongoDB, connecting it using the Mongoose library.
For authentication I used jwt-simple and passport.
## Usage:
Run 'npm run dev' and wait for server to start + db to connect.
1.`POST /users/create`: This route allows you to create a user.
The body needs to be of type JSON and needs to include:
- Name.
- EmailAddress - with a university domain (e.g. john@huji.ac.il).
- Role (Acceptable possibilities: student, academic, administrator).
- Password.

The created User is returned.

2.`POST /users/signin`: This route allows you to get a token for an existing user.
The body needs to be of type JSON and needs to include:
- EmailAddress - of an existing user

The created token for the user is returned.

The possible University domains are:
technion.ac.il
huji.ac.il
biu.ac.il
tau.ac.il
haifa.ac.il
bgu.ac.il
openu.ac.il
ariel.ac.il
runi.ac.il

## Project Structure:
The src directory contains:
- routes: containing the routes for /users ans /books.
- models: containing the schemas for the collections in the project.
including: user, book, institution.
Also:  UserToken for authentication and InstitutionBookXRef for a many to many connection between books and institutions.
- controllers: containing all files with the functionality for the routes.
- config: containing configurations for mongoDB and jwt.
- authentication: containing the authentication logic.
- validations: containing all needed validation files for the controllers.
- utils: containing general functionality for the whole project.
- interfaces: Typescript interfaces for user, institution and book.

## Thought Process:
1. First, I created the routing:
Installed node, configured Typescript, installed express and created a basic server.
Then I created the 'routes' directory, with the endpoints.
2. I connected to db:
Created a MongoDB atlas account, installed Mongoose, installed dotenv,
Created a .env file for MongoDB info,
Created a config file to interact with the .env file,
Connected the server with the database.
3. I created the MongoDB schemas:
In the models directory: User, Institution, Book and InstitutionBookXRef.
4. I created the `POST /users/create` route:
Installed Joi, created schemas to validate the provided body,
Created regex statements for these schemas,
Extracted all email domains of the institutions,
Compared all email domains to the email domain provided in body,
Provided consistent error handling,
Created a user in DB using Mongoose.
5. I created the `POST /users/signin` route:
I have decided that the best user identifier in that case is the EmailAddress since it is unique.
I searched for the EmailAddress in users,
Provided consistent error handling,
Installed jwt-simple, Created authentication directory and generated a token.
I created a UserToken schema to save EmailAddress:Token entries.
I created a document with the EmailAddress and the Token.
6. I created the authentication process:
Installed passport, installed passport-http-bearer,
Created a BearerStrategy, including finding the token in DB,
Use it as a middleware, Created a protected route for `GET /books`.

## What I Would Have Added:
Provided with more time, I would have added:
1. I would have finished the `GET /books` route:
Creating book documents and attaching them to institutions using the InstitutionBookXRef collection.
Getting the EmailAddress of the user from the UserToken collection,
Extract the domain from there,
Get all books attached to the domain from the InstitutionBookXRef collection.
I would have added paging, sorting and filtering options.
2. I would have added a check if a user already exists to avoid duplicates.
3. I would have added tests for the controllers, validations and authentication.
4. I would have provided a Postman collection.

## In Conclusion:
It was a great challenge, I learned some things, I used technologies I don't get to use at work,
So thank you for that.

