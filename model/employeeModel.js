import mongoose from "mongoose"

const employeeSchema = mongoose.Schema({

  //no ID because id is automatically added by mongoose
  firstName: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "Last name is required"]
  },
  emailId: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "Email is required"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/, 'Please fill a valid email address']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

 const Employee = mongoose.model("Employee", employeeSchema)
 export default Employee;