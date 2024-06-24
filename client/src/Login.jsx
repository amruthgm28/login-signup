import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', { email, password })
            .then(response => {
                console.log(response);
                if (response.data === "Login successful") {
                    navigate('/home');
                } else { 
                    alert("Login failed. Please check your credentials.");
                }
            })
            .catch(err => {
                console.error("Login error:", err);
                alert("An error occurred during login.");
            });
    };

    return (
        <div className="flex justify-center items-center m-auto bg-gray-500 w-full h-screen">
            <div className="bg-white p-3 flex justify-center items-center rounded">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>E-mail</strong></label><br />
                        <input
                            type="email"
                            placeholder="Enter Your email"
                            name="email"
                            className="border rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label><br />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="border rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bg-green-700 p-1 text-white rounded-lg">
                        Login
                    </button>
                    <br /><br />
                    <p>Don't have an account?</p>
                    <Link to="/register">
                        <p className="bg-orange-400 text-center p-1">Register</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
