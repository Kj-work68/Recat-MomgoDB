const TaskModel = require("../Models/Taskmodels")

module.exports.getTask = async (req, res) =>{
    const tasks = await TaskModel.find()
    res.send(tasks)
    
} 

module.exports.saveTask =  (req, res) =>{

    const {task} = req.body
    TaskModel.create({task})
    .then((data) =>{
        console.log("Save");
        res.status(201).send(data) //การใช้ res.status(201) ในการตอบกลับจากเซิร์ฟเวอร์ใน Express.js (หรือโมดูลอื่นที่ใช้ร่วมกับ HTTP) จะตั้งสถานะการตอบกลับเป็น 201 Created
    }).catch((err) =>{
            console.log(err);
            res.send({error: err, msg: "Something went wrong"})
    })
} 

module.exports.updateTask =  (req, res) =>{
    const {id} = req.params
    const {task} = req.body

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("Update Complete"))
    .catch((err) =>{
            console.log(err);
            res.send({error: err, msg: "Something went wrong"})
    })
} 

module.exports.deleteTask =  (req, res) =>{
    const {id} = req.params
    

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Delete Complete"))
    .catch((err) =>{
            console.log(err);
            res.send({error: err, msg: "Something went wrong"})
    })
} 