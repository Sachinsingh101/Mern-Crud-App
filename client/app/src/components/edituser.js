import axios from "axios";
import {  useParams } from "react-router-dom";
import {useState,useEffect} from 'react';


function Edituser(){
    const [newdata,setnewdata]=useState({
        Name:"",
        Email:"",
        number:""
    });
    function changeHandler1(e){
        setnewdata({
           ...newdata, Name:e.target.value
        });
    }
    function changeHandler2(e){
        setnewdata({
           ...newdata, Email:e.target.value
        });
    }
    function changeHandler3(e){
        setnewdata({
           ...newdata, number:e.target.value
        });
    }
    const routeParams=useParams();
    const id=routeParams.id;
    function getsingledata(){
        axios.get(`http://localhost:4000/getsingleuser/${id}`).then(res=>{
            setnewdata({
                Name:res.data.name,
                Email:res.data.email,
                number:res.data.number
            });
            console.log(newdata);
        })
        console.log(id);
    }
    useEffect(()=>{
        getsingledata();
    },[]);
    function submitHandler(e){
        e.preventDefault()
        const updatedData={
            name:newdata.Name,
            email:newdata.Email,
            number:newdata.number
        }
        try{
            axios.put(`http://localhost:4000/Edit/${id}`,updatedData);
            setnewdata({
                Name:"",
                Email:"",
                number:""
            });
            alert("data updated successfully !!!");
        }catch(err){
            console.log("error while updating",err);
        }    
    }
    function deleteuser(){
        try {
            axios.delete(`http://localhost:4000/deleteuser/${id}`);
            alert("user deleted successfully !!!!");
            setnewdata({
                Name:"",
                Email:"",
                number:""
            });
            alert("user updated successfully !!!!1");
        }catch(err){
            console.log("error while making delete request",err);
        }
        
    }
    
    
    return(
        <>
          <div className="container mt-5">
          <form onSubmit={submitHandler}>
             <h1 className="text-center">Edit User</h1>
             <input type="text" placeholder="Enter your Name" name="name" className="form-control m-3" value={newdata.Name} required onChange={changeHandler1}></input>
             <input type="email" placeholder="Enter your Email" name="email" className="form-control m-3" value={newdata.Email}required onChange={changeHandler2}></input>
             <input type="number" placeholder="Enter your Phone number" name="number" className="form-control m-3" value={newdata.number} required onChange={changeHandler3}></input>
             <input  type="submit" className="btn btn-primary form-control m-3"></input>
         </form>
         <h5 className="text-center text-muted">OR</h5>
         <div className="btn btn-outline-danger form-control m-3 " onClick={deleteuser}>Delete</div>
          </div>
          
        </>
    );
    
}
export default Edituser;