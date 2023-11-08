const express=require("express");
require("../src/db/conn");

const MoviesName=require("../src/models/movies");
const router = require("./routers/route");

const app=express();
const port=process.env.PORT || 8000;

app.get("/",async(req,res)=>{
    res.send("Hello From the Api");
})
app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`Server is connected at port no. ${port}`);
})

