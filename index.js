import express from 'express'
import jwt from 'jsonwebtoken'
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

app.listen(PORT, ()=> console.log(`backend server is running on ${PORT}`))