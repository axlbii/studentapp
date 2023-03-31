import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = () => {
    var[input,setinput]=useState({
        name:'',
        grade:''
    });
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues =()=>{
        console.log('clicked')
        axios.post("http://localhost:3005/student",input)
        .then(reponse=>{
            alert("Successfully Added")
        })
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
 