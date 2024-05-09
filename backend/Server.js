const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const routes = require("./routes/TaskRoute")

const cors = require("cors")

const app = express()
const PORT = process.env.PORT | 3000 //ต้องกำหนดพอตด้วย

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.log('err'))

// app.get("/", (req, res) =>{
//     res.send("The Brave Coders") test system
// })

app.listen(PORT, () => console.log(`listening at ${PORT}`)) //ถ้าใส่ "" จะไม่ขึ้น ต้องใส่``
app.use("/api", routes)
