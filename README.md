# basic-api-server

**V1.1**

## Author

Mousa Sabah

## About

API-server that implements Basic and bearer Authentication, with **signup** and **signin** capabilities for each user there is a permission that allowed you to read , create ,update or delete, using a Mongo database for storage.

**The server support the FORM-DATA**

## Deployment

This project use Heroku to deployment

API Live Url: **https://mousa-auth-api.herokuapp.com/**

## Pull Request

This is the Main Pull Request for this project :
https://github.com/MousaSbbah/auth-api/pull/1

## Setup

.env requirements

      PORT - 3030
      MONGOOSE_URI -  mongodb://********************
      SECRET - *****

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

-  `/food` Return JSON objects
```json
  [
    {
        "_id": "60ae3e97d1b84b589696913a",
        "name": "pizza",
        "calories": 250,
        "__v": 0
    }
]
  ```
- `/clothes`Return JSON objects

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

## Tests
high coverage test : 

![coverage](./assest/coverage.png)


You can check Github actions link :**https://github.com/MousaSbbah/auth-api/actions**

**Unit Tests:**

```
npm run test
```

##

## UML

![uml](./assest/uml.png)
