const student = require("../models/student")
const mongoose = require("mongoose")

//get all students
const getStudents = async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true")
    const students = await student.find({}).sort({createdAt: -1})
    // console.log("Working")
    return res.status(200).json(students)
}
//get a single student
const getStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such student"})
    }
    
    const oneStudent = await student.findById(id)
    
    if (!oneStudent){
        return res.status(404).json({error: "No such student"})
    }
    
    return res.status(200).json(oneStudent)
}


//Add a new student
const newStudent = async (req, res) => {
    const {name,rollnum,email,age} = req.body
    
    try {
        const newStudent = await student.create({name, rollnum,email,age})
        
        return res.status(200).json(newStudent)
    }catch(err){
        
        return res.status(400).json({error: err.message})
    
    }
}


//delete a workout
const deleteStudent = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No student found"})
    }
    
    const deleteStudent = await student.findOneAndDelete({_id: id})
    
    if (!deleteStudent){
        return res.status(400).json({error: "No student found"})
    }
    
    return res.status(200).json(deleteStudent);
}



//update a student details
const updateStudent = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No student found"})
    }
    
    const updatedStudent = await workoutModel.findOneAndUpdate({ _id: id },{ ...req.body })
    
    if (!updatedStudent){
        return res.status(400).json({error: "Update Failed"})
    }
    
    return res.status(200).json(updatedStudent)
}

module.exports = { getStudents, getStudent, newStudent, deleteStudent,updateStudent }