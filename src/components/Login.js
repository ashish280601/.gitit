import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import "./styles/styles.css";


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home")
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up");
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="post" className="form">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="form-input" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" autoComplete="on" className="form-input" />
                <button className="submit-btn" onClick={submit}>Log In</button>
                <p>New to MyApp <Link to="/signup" className="link">Signup</Link></p>
            </form>

        </div>
    )
}

export default Login