import React from 'react'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


 function Register () {
 
const [values,setValues]=useState({
  username:"",
  email:"",
  password:"",
  confirmpassword:"",
})
const toastoption={
  position: 'bottom-right',
  autoClose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark",
}
  
  const handleSubmit=(event)=>{
    event.preventDefault()
   handleValidation()
  }
  const handleValidation=()=>{
    const {password,confirmpassword,email,username}=values
    if(password !== confirmpassword){
      toast.error("password and confirmpassword not same",toastoption);
      return false

    }else if(username.length<3){
      toast.error("username greter then 3 character",toastoption)
      return false;
    }else if(password.length<8){
      toast.error("password greter then 8 character",toastoption)
      return false;
    } else if(email===""){
      toast.error("email is required",toastoption)
      return false;
    }
    return true
  }
  const handleChange=(event)=>{
    setValues({...values,[event.target.name]:event.target.value});
  }
  return (
    <>
    <Formcontain>
      <form onSubmit={(event)=>handleSubmit(event)}>

    
<div className='brand'>
  <img src="" alt="" />
  <h1>logo</h1>
</div>
<input type="text" placeholder='username' name='username' onChange={(e)=>handleChange(e)}/>
<input type="email" placeholder='email' name='email' onChange={(e)=>handleChange(e)}/>
<input type="password" placeholder='password' name='password' onChange={(e)=>handleChange(e)}/>
<input type="password" placeholder='confirm password' name='confirm password' onChange={(e)=>handleChange(e)}/>


<button type='submit'>create user</button>
<span>already have an account  <Link to="/login">login</Link></span> 
      </form>




    </Formcontain>
      


<ToastContainer/>
</>
  )
}


 const Formcontain=styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 flex-direction: column;
 gap: 1rem;
 align-items: center;
 background-color: lightyellow;
 .brand{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1{
    color: blue;
  }
 
 }
 form{
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color:lightgreen;
  gap: 2rem;
  input{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0.1rem solid black;
    border-radius: 5px;
    &:focus{
      border: 0.2rem solid white;
      outline: none;
    }
  
  }

 }

  `
  

export default Register 