import Employee from "../model/employeeModel.js"

// 1
// fetch all employees
export const GETEmployees = async (req, res) =>{
  try{
      const employees = await Employee.find()
      res.status(200).json(employees)
  }catch(err){
    res.status(404).json({message: err})
  }
}



// 2
//create a new employee
export const POSTEmployee = async (req, res) =>{
  const employee = new Employee({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    emailId : req.body.emailId
  })
  try{
  const savedEmployee = await employee.save()
  res.status(201).json(savedEmployee)
  }catch(err){
    res.status(404).json({message: err});
  }
}


// 3
// fetch the employee with matched id
export const GETEmployee = async (req, res) =>{
  try{
      const employee= await Employee.find({ _id : req.params.id})
      if(!employee) res.status(404).send("No employee found")
      res.status(200).json(employee)
      
  }catch(err){
    res.status(500).json({message: err})
  }
}


// 4
//update employee by id
export const PUTEmployee = async (req, res) =>{
 
  try{
      const employee= await Employee.updateOne(
        { _id : req.params.id},
        {$set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailId: req.body.emailId
        }
      })
      res.status(200).json(employee)
  }catch(err){
    res.status(404).json({message: err})
  }
}



// 5
// Deletes an employee by id
export const DELETEEmployee = async(req, res) =>{
  
  try{
    const employee= await Employee.deleteOne({ _id : req.params.id})
    res.status(200).send("Successfully deleted")
}catch(err){
  res.status(404).json({message: err})
}
}