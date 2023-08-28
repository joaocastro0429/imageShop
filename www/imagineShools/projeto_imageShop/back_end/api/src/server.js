import express from "express";
import User from './User.js'

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    const user=new User("João",35)

    console.log(user)
    console.log(user.fullName())
    res.send("IMAGE SHOP")
})


app.listen(3333,()=>console.log("carregando..."))