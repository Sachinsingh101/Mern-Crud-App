import {useState} from 'react'
import axios from 'axios'
function Adduser(){
    const [user,setuser]=useState({
        Name:"",
        email:"",
        number:""
    });
    function changeHandler1(e){
        setuser({
            ...user,Name:e.target.value
        })
        
    }
    function changeHandler2(e){
        setuser({
            ...user,email:e.target.value
        })
    }
    function changeHandler3(e){
        setuser({
            ...user,number:e.target.value
        })
    }
    function submitHandler(e){
        e.preventDefault()
        const userdata={
            name:user.Name,
            email:user.email,
            number:user.number
            
        }
        try{
            axios.post('http://localhost:4000/add',userdata);
            setuser({
                Name:"",
                Email:"",
                number:""
            });
            alert("user added successfully !!!");
        }catch (err){
            console.log("react aios post error",err);
        }


        console.log(userdata);
        
    }

    
    return(
        <>
          <div className="container m-5">
            <h1 className="text-center text-dark">Add User</h1>
            <form onSubmit={submitHandler}>
             <input type="text" placeholder="Enter your Name" name="name" className="form-control m-3" onChange={changeHandler1} value={user.Name} required></input>
             <input type="email" placeholder="Enter your Email" name="email" className="form-control m-3" onChange={changeHandler2} value={user.Email} required></input>
             <input type="number" placeholder="Enter your Phone number" name="number" className="form-control m-3" onChange={changeHandler3} value={user.number} required></input>
             <input  type="submit"  className="btn btn-primary form-control m-3" ></input>
             <input type="reset" className="btn btn-danger form-control m-3"></input>
            </form>
          </div>
        </>
    )
}
export default Adduser;