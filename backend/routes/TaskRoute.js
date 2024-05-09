const {Router} = require("express");

const {getTask, saveTask, updateTask, deleteTask} = require("../Controllers/Taskcontrollers")
const router = Router()

router.get("/get", getTask);
router.post("/save", saveTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask) //ลืมใส่ : 

module.exports = router //export มี s