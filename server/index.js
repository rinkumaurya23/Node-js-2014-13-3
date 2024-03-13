const http =require("http")
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}New Req Recived\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
      switch(req.url){
        case "/":
          res.end("HomePage");
          break;
          case "/about":
            res.end("I Am Rinku Maurya");
            break;
            default:res.end("404");
      }
      res.end("hello From Server");
    })
    // console.log("new Req Rec.");

    // console.log(req);
    
});
myServer.listen(8000,()=>console.log("Server Started!"));




