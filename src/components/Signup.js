import React, {useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import styled from  "./styles/register.module.css";


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('');;
    const [password,setPassword]=useState('')
    const [name, setName] = useState('');

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,name
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home")
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
        <div className={styled.login}>

            <h1>Create Account</h1>

            <form className={styled.form} action="post">
                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name" className={styled.formInput} />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  className={styled.formInput}/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" autoComplete="on" className={styled.formInput} />
                <button className={styled.submitBtn} onClick={submit}>Sign Up</button>
                <p>Already have an account?<Link to="/" className={styled.link}>Login</Link></p>
            </form>


        </div>
    )
}

export default Login