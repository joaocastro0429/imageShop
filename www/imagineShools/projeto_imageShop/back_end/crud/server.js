const express=require('express')
const { use } = require('express/lib/application')


const users=[]

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("bem vindo ao crud")

})
app.get("/users",(req,res)=>{
    return res.json(users)
})


app.post("/users",(req,res)=>{

const{nome,email,id}=req.body
const user={
    id:users.length,
    nome,
    email,
} 

users.push(user)
res.json(user)

})


app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id)

    const user=users.find(user=>user.id===id)

    res.json(user||{})
})

app.put("/users/:id",(req,res)=>{
  const id=Number(req.params.id)
  const newName=req.body.name

  const userIndex=users.findIndex(user=>user.id===id)

  if(userIndex){
    users[userIndex].nome=newName
    res.json({messagem:"sucess"})
  }else{
    res.json({messagem:"user not found"})
  }
})


app.delete("/users/:id",(req,res)=>{
    const id=Number(req.params.id)

    const index=users.findIndex(user=>user.id===id)

    if(index>-1){
        users.splice(index,1)
    }

  return res.json({message:"removido com sucesso"})



})




app.listen(3333,()=>console.log("servidor carregando..."))