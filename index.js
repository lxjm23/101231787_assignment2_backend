import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//import routes
import employeeRoute from './routes/employeeRoutes.js'

const app = express()

app.use(bodyParser.json())
app.use("/api/v1/employees/", employeeRoute)

const DATABASE_CONNECTION  = "mongodb+srv://ljm12543:Jmlopez2001@comp3123.crqoo.mongodb.net/employee?retryWrites=true&w=majority";
const PORT = process.env.PORT || 9090;


// Connect to DB
mongoose.connect(DATABASE_CONNECTION, {useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message))




