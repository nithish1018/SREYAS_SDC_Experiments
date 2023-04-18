const express = require("express")
const { getStudents, getStudent, newStudent, deleteStudent,updateStudent} = require("../controllers/studentController")
const router = express.Router()

//GET all students
router.get('/', getStudents)

//GET a single student
router.get('/:id', getStudent)

//POST a new student
router.post('/', newStudent)

//DELETE a student
router.delete('/:id', deleteStudent)

//UPDATE a student
router.patch('/:id', updateStudent )

module.exports = router