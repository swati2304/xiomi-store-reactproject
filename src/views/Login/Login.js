import React from "react";
import "./Login.css";
 
function Login() {
    return (
        <>
        <div className="container">
            <p className="title">Login Form</p>
            <form className="App"/>
            
                <input placeholder="username"  type="text" required />
                <br/>
                
                <input  placeholder= "email"   type="email" required/>
                <br/>
                
                <input placeholder="password" type="password"  required/>
                <br/>
                
            
                <input type={"submit"} className="button"
                    style={{ backgroundColor: "black" }} />
            <form/>
            </div>
            
        </>
    );
}
 
export default Login;