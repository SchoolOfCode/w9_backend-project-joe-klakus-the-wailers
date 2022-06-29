
# Bootcamper Social.

This is the Backend of our Mid-way project for School Of Code, we were presented with the task of creating an app that would help a bootcamper through this experience. After some discussion we decided to create an APP centered around meeting other bootcampers outside of Bootcamp Hours.

As of 28/6/2022 the app is not deployed and so you will have to run it locally to view.
## To Run Locally:

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-joe-klakus-the-wailers.git
```

Go to the project directory

```bash
  cd my-app
```

Install dependencies

```bash
  npm i (or npm install)
```

Start the server

```bash
  npm run dev
```


## Environment Variables

Create a copy of the .env.example file then fill in those credentials with those for your own database and rename the file .env (dont forget to makesure youre gitignore has .env in it).
## To Run the Tests:

To run tests, run the following command

```bash
  npm run test
```


## Authors

- [@Plume93](https://github.com/Plume93)
- [@JojokCreator](https://github.com/JojokCreator)
- [@Musy88](https://github.com/Musy88)
- [@danielknight261](https://github.com/danielknight261)


## API Reference

#### Users Routes

#### GET ALL USERS

```http
  GET localhost:3000/users
```

| Route     | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/users` | `GET` | GETs all the users in the database |

#### POST 

```http
  POST localhost:3000/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/users`      | `POST` | Creates a new user |

#### PATCH 

```http
  PATCH localhost:3000/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/users/:id`      | `PATCH` | Updates a user with the designated id |

#### DELETE

```http
  DELETE localhost:3000/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/users/:id`      | `DELETE` | Delete the user with the designated id |


#### Events Routes
```http
 For events paths use the above references but with /events instead of /users.
```






