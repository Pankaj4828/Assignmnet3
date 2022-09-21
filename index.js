const http=require("http");
const fs=require("fs");


fs.writeFile("index.html",`<h1>hello world</h1>`,(error)=>{
    console.log(error)
});
fs.appendFile("index.html",`<p>This is Pankaj...</p>`,(error)=>{
    console.log(error)
})
const server=http.createServer((req,resp)=>{
    fs.readFile("index.html","utf-8",(error,data)=>{
        if(error){
            console.log(error)
        }else{
            resp.end(data);
        }
    })
});
server.listen(5000,()=>{
    console.log("server run at port no 5000")
})
