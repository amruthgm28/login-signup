import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


function called()
{alert("registred successfully")}    



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => console.log(result))
            navigate('/login')


            .catch(err => console.log(err))
    }


    return (
        <div className="flex justify-center items-center m-auto bg-gray-500 w-full h-screen">
            <div className="bg-white p-3 flex justify-center items-center rounded">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label><br />
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="border-2 rounded-lg"
                            onChange={(e) => setName(e.target.value)} // Fixed onChange syntax
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>E-mail</strong></label><br />
                        <input
                            type="email"
                            placeholder="Enter Your mail"
                            name="email"
                            className="border rounded-lg"
                            onChange={(e) => setEmail(e.target.value)} // Fixed onChange syntax
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label><br />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="border rounded-lg"
                            onChange={(e) => setPassword(e.target.value)} // Fixed onChange syntax
                        />
                    </div>
                    <button type="submit" className="bg-green-700 p-1 text-white w-100 rounded-0" onClick={called}>
                        Register
                    </button>
                    <br /><br />
                    <p>Already Have an account</p>
                    <Link to="/login">
                        <p className="bg-orange-400 text-center p-1">Login</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;