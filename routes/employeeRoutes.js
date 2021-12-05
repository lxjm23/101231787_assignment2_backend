import express from 'express'
import { GETEmployees, POSTEmployee, GETEmployee, DELETEEmployee, PUTEmployee } from '../controllers/controller.js';

const router = express.Router()

// #1
// GET => http://localhost:9000/api/v1/employees
router.get("/", GETEmployees);

// #2
// POST =>  http://localhost:9000/api/v1/employees
router.post("/",POSTEmployee);


// #3
// GET => http://localhost:9000/api/v1/employees/{id}
router.get("/:id", GETEmployee);

// #4
// PUT
router.put("/:id", PUTEmployee)


// #5
// DELETE => http://localhost:9000/api/v1/employees?id=5
router.delete("/:id", DELETEEmployee)




export default router;