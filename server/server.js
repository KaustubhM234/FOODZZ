const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 8000
const mongoURI = 'mongodb://xyz'

mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
    if (err)  console.log(err)
    else{
        console.log('connected');    
        const fetchedData = await mongoose.connection.db.collection("foodData");
        fetchedData.find({}).toArray(function(err,data){
            const fetchCategory = mongoose.connection.db.collection("foodCategory");
            fetchCategory.find({}).toArray(function(err,cdata){
                if(err) console.log(err)
                else{
                    global.food_items = data;
                    global.food_category = cdata;
                }
            })
        })
    }
})

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.use(express.json())
app.use('/api',require("./Routes/createUser"));
app.use('/api',require("./Routes/displayData"));

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
