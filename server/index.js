const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./Employee')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Login successful");
                } else {
                    res.status(400).json("Incorrect password");
                }
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => {
            console.error("Error while logging in:", err);
            res.status(500).json("Internal server error");
        });
});

app.post('/register', async (req, res) => {

    const {email,password,name}=req.body

   



    const Employeedata = new EmployeeModel({
        email,
        password,
        name
    })
   await Employeedata.save()
    res.status(200).json({ message: "success" })

})

app.listen(3001, () => {
    console.log("server is working")
})