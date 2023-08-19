import express from "express";
//import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";


const dir_name = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var pass = "";


app.use(express.urlencoded({extended: true}));

app.use((req,res,next)=>{
    console.log(req.body);
    pass = req.body["secret"];
    next();

});

app.post("/submit",(req,res)=>{
            res.send("<h1>hehe i'll keep your secrets safe<h1>");
    
   
});


app.get("/",(req,res)=>{
    res.sendFile(dir_name+"/index.html");
});

app.listen(port,()=>{
    console.log("Listening on port:"+port);
});