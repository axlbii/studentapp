import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = (props) => {
    var[input,setinput]=useState(props.data)
    console.log(props.data)
    
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues =()=>{
        console.log('clicked')
        if(props.method=="post"){
        axios.post("http://localhost:3006/student",input)
        .then(reponse=>{
            alert("Successfully Added")
        })
      }
    else if(props.method ==="put"){
      axios.put("http://localhost:3006/student/"+input.id,input)
      .then(response=>{
        alert("updated successfully")
        window.location.reload(false)
      })
      .catch(err=>console.log(err))
    }
  }
  return (
    <div>
   <p></p>
      <TextField   variant="outlined" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <p/>
       <Typography>{input.name}</Typography>
      <TextField id="outlined-basic" label="grade" variant="outlined" onChange={inputhandler1} 
      name='grade' value={input.grade} /><p/><p/>
       <Typography>{input.grade}</Typography>
      <Button variant="contained"onClick={readvalues}>save</Button><p/>
    </div>
  )
  }
export default Add
 