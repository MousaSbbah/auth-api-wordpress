# auth-api-wordpress

## About

The server will allow useres to signup and sign in using basic authentication, besides, the server allows the users to use Oauth for ***Wordpress***.

The server has two api versions:

Version 1 :

Consists of 2 routes, food and clothes with CRUD operations and Mongoose Database.

Version 2:

The server will allow users to use the routes food and clothes using bearer authentication, RBAC rules are applied on the users.The users have different CRUD permissions depends on their roles in the Mongoose Database using JSON web token.

## Authors

1. ***Shady Khaled***
2. ***Mousa Sabbah***
3. ***Tasnim Wheebi***
4. ***Amjad Mesmar***

**The server support the FORM-DATA**

## Links

This project use Heroku to deployment

Repository:   **https://github.com/MousaSbbah/auth-api-wordpress**
Heroku App Url: **https://worddpress-oauth.herokuapp.com/**

## Setup

### Dependencies

```

  "dependencies": {
    "base-64": "^1.0.0",
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.11",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "superagent": "^6.1.0"
  }

```

### .env requirements

```
      PORT = 3030
      MONGOOSE_URI = mongodb://********************
      SECRET = *****
      CLIENT_ID = *******************
      CLIENT_SECRET = *******************
      REDIRECT_URI = *******************
```

## Running the app

```
npm start
```

Endpoint:

- `/signup`
  After sign up with you unique username the server will Return JSON objects for your info
  ```json
    {
     "user" : {
                 "_id": "60aac2f016ea1300151a5a15",
                 "username": "User03",
                 "password": "$2b$10$V9k1bLak6aObNxm4iTe0J.qsBRjK8n18hU.z0aQBalDZFEIWYa9oy",
                 "__v": 0
              }
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIzMzMiLCJpYXQiOjE2MjE5NjYxODEsImV4cCI6MTYyMTk2NzA4MX0.0QlVteHsTA46PdXewapnw6EKaEGExgGoAGUo4StbfVg"
    }
  ```
- `/signin`
  After sign in with correct username and password the server will
  Return JSON objects
  ```json
   { "user" : { 
     "_id": "60aac2f016ea1300151a5a15",
      "username": "User03",
       "password": "$2b$10$V9k1bLak6aObNxm4iTe0J.qsBRjK8n18hU.z0aQBalDZFEIWYa9oy",
        "__v": 0 } 
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIzMzMiLCJpYXQiOjE2MjE5NjYxODEsImV4cCI6MTYyMTk2NzA4MX0.0QlVteHsTA46PdXewapnw6EKaEGExgGoAGUo4StbfVg" } 
   ```

- `/users`
  if you try to get user by bearer auth with `Admin` token the server will
  Return all users as a JSON objects
  ```json
  [
    "User01",
    "User02",
    "User03",
    "User33",
    "User333",
    "User99",
    "user100",
    "user101",
    "user102"
    ]

  ```

-  `/api/v1/food` Return JSON objects
```json
  [
    {
        "_id": "60ae3e97d1b84b589696913a",
        "name": "apple",
        "calories": 60,
        "type": "FRUIT",
        "__v": 0
    }
]
  ```
- `/api/v1/clothes`Return JSON objects

```json
[
    {
        "_id": "60aebdff86f6065b604fb22b",
        "name": "T-Shirt",
        "color": "Black",
        "size": "L",
        "__v": 0
    }
]
```

-  `/api/v2/food` Return JSON objects
```json
  [
    {
        "_id": "60ae3e97d1b84b589696913a",
        "name": "apple",
        "calories": 60,
        "type": "FRUIT",
        "__v": 0
    }
]
  ```
- `/api/v2/clothes`Return JSON objects

```json
[
    {
        "_id": "60aebdff86f6065b604fb22b",
        "name": "T-Shirt",
        "color": "Black",
        "size": "L",
        "__v": 0
    }
]
```

- `/oauth`

```json
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vdXNhMTIzOTk2IiwiaWF0IjoxNjIyMjI4MjYzfQ.vuh-2o1HxZ1-GR4OF9hxw1qJX9HbT9YsPLfoC9M-wPI",
"user": {
"username": "mousa123996",
"password": "58z5c@BB5k@LtZzV4Qe#PAA7bHQA5vzkrkFOaBin#lf20e&SSTsk3M(D%8qg4&Nd"
}
}
```

## UML Diagram

![uml](./assest/Wordpress-Oauth-V2.png)
