const http=require('http')


const server=http.createServer((req,res)=>{

if(req.url==="/"){
    res.end("ok")
}    

 
if(req.url==="/movies"){
res.end("filmes")
} 
if(req.url==="/users"){
    res.end("usuario não encontrado")
}

if(req.url==="/profile"){
    res.end("prefil")
}

})

server.listen(3000,()=>{
    console.log("servidor rodando")
})