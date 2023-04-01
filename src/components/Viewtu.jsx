import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const Viewtu = () => {
    var[update,setupdate]=useState(false)
    var[selected,setsSelected]=useState([])
    var[students,setStudents]=useState([])
    
        useEffect(()=>{
            axios.get("http://localhost:3006/student")
            .then(response=>{ 
            
                setStudents(students=response.data)
                console.log(students)
            })
        
            .catch(error=>console.log(error))
        },[])
        const deletevalue=(id)=>{
            console.log(id)
            axios.delete("http://localhost:3006/student/"+id)
            .then(reponse=>{
                alert("Successfully Deleted")
                window.location.reload(false)
            })
           .catch(err=>console.log(err))
        }
        const updatevalue=(value)=>{console.log('update',value)
        setsSelected(value)
        setupdate(true)
        }
        var finaljsx=<TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
              <TableCell>Grade</TableCell>  
            </TableRow >
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell>
                            <Button onClick={()=>deletevalue(value.id)}>Delete</Button></TableCell>
                            <TableCell><Button onClick={()=>updatevalue(value)}>Update</Button></TableCell>
                    </TableRow>
    })}
            </TableBody>
        </Table>
        </TableContainer>
        if(update)
        finaljsx=<Add data={selected} method='put'/>
  return (
 
      finaljsx
  
  )
}

export default Viewtu