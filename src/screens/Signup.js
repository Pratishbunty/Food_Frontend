import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import M from "materialize-css"

const Signup=()=> {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");
  const [location,setLocation]=useState("");

  //Make a Network Request 
  const PostData= ()=>{
    // eslint-disable-next-line
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      //M.toast({html: 'Invalid Email', classes: '#c62828 red darken-3'});
      alert("Invalid email")
      return
    }
    fetch("/api/createuser",{
      method:"post",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        email,
        mobile,
        password,
        Location
       
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.error){
        //M.toast({html: data.error, classes: '#c62828 red lighten-1'})
        alert("Something went wrong plz try again ")
      }else{
        //M.toast({html: data.message, classes: '#c62828 green darken-1'})
        alert("sucessfully done ")
          navigate('/Login');
      }
    }).catch(err=>{
    //   console.log(err)
    })
  }
  return (
   <div className='mycard'>
    <div className='card auth-card input-field'>
      <h2>Instagram</h2>
      <input 
      type='text'
      placeholder="name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

     <input 
      type='email'
      placeholder="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input 
      type='text'
      placeholder="mobile"
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)}
      />

     <input 
      type='password'
      placeholder="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />

     <input 
      type='location'
      placeholder="location"
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
      />
      <button class="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
        onClick={()=>PostData()} >
      Submit</button>
      <h5>
        <Link to="/login">Already Have an Account?</Link>
      </h5>

    </div>

   </div>
  )
}

export default Signup;