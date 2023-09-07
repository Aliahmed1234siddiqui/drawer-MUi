import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'
import { type } from 'os';
import { stringify } from 'querystring';
import { useNavigate } from 'react-router-dom';
import '../../App.css'
type useModel = {
  email: string,
  password: string,
}




export default function Login() {
    const[model , setModel] = useState<useModel>({
        email:"",
        password:"",
      })
      
      
const navigate = useNavigate();      
      
      let login= ()=>{
      
      navigate('./Dashboard');
      }
      
  return (
    <div>
      <div className="app" >
   
   <div className="main   mx-auto w-25 "  >
   <div className="sub text-center">
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>
      <br />  <Button variant="contained" onClick={login}>LOGIN</Button>
        </div>

   </div>
    </div>
    </div>
  )
}
