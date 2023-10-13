import React, { useState } from 'react';
import "./Signup.css"
export default Signup

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [forgotPassword, setforgotPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}\nforgotpassword: ${forgotPassword}` );
  };
  
  

  return (
    <div className='signup-container'>
      <p className='title'>Signup</p>

    <form  onSubmit={handleSubmit}>
      
     <input  placeholder= 'email' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    
      <br/>
     <input  placeholder='password' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br/>
     <input  placeholder="confirm-password"     type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
     <input  placeholder="forgot-password"     type="password" id="forgot-password" value={forgotPassword} onChange={(e) => setforgotPassword(e.target.value)} required />

     <button type="submit" className='button'>Sign Up</button>
    </form>
    </div>
  );
}
