import express from 'express'
import jwt from 'jsonwebtoken'
import usersRouter from './routes/user.js';
const app = express();
app.use(express.json())
const PORT = process.env.port || 5000;

const users = [
    {
    id: "1",
    username: "admin",
    password: "admin",
}
];

app.use("/", usersRouter)

app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    const user = users.find((u) => {
       return u.username === username && u.password == password
    })
    if(user){
      //GEnerate access token
      const accessToken = jwt.sign({id:user.id}, 'thisisasecret')
      res.json({
        username:user.username,
        accessToken,
      })
    } else{
        res.status(400).json("username or password incorrect")
    }  
});

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

app.get("/main", verify, (req,res)=> {

})

app.listen(PORT, ()=> console.log(`backend server is running on ${PORT}`))

export default app;