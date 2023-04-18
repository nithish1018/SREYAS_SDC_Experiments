const mongoose = require("mongoose")
const express = require("express")
const studentroutes = require("./routes/studentroutes")
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/students/', studentroutes )

//routes
app.get("/", (req, res) => {
    res.json({msg: "This is the message"})
})

//Connecting to MongoDB.
mongoose.connect("mongodb+srv://nithishsiliveru:VXxGKwJ7zWKUuDNH@cluster0.k67k1ue.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        //Listening for requests
        app.listen(4000, () => {
            console.log("Listening on port 4000")
        })
    })
    .catch((err)=>{
        console.log(err)
    })

