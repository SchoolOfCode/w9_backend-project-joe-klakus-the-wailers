import express from 'express'
import jwt from 'jsonwebtoken'
import usersRouter from './routes/user.js';
import eventsRouter from './routes/events.js';
const app = express();
//Middleware that parses the data
app.use(express.json())
//Sets the port
const PORT = process.env.port || 5000;

//Mock user for JWT
const users = [
    {
    id: "1",
    username: "admin",
    password: "admin",
}
];

//Router middleware
app.use("/", usersRouter);
app.use("/", eventsRouter);

//Route to Login
app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    const user = users.find((u) => {
       return u.username === username && u.password == password
    })
    if(user){
      //Generate access token
      const accessToken = jwt.sign({id:user.id}, 'thisisasecret')
      res.json({
        username:user.username,
        accessToken,
      })
    } else{
        res.status(400).json("username or password incorrect")
    }  
});
//Verify function used as middleware on protected routes
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1]

    jwt.verify(token, "thisisasecret",(err, user)=>{
        if(err){
            return res.status(403).json("Token is not valid")
        }
        req.user = user
        res.status(401).json("Success")  
        next();
    });
    } else {
      res.status(401).json("Not allowed")  
    }
};
//Test route to test verification
app.get("/main", verify, (req,res)=> {

})

//Setting up a listener
app.listen(PORT, ()=> console.log(`backend server is running on ${PORT}`))

export default app;