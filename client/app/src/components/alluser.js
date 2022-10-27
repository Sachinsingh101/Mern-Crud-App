import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Getallusers(props){

    const [Alluser,setuser]=useState({
        students:[]
    })
    useEffect(()=>{
        try{
            axios.get('http://localhost:4000/getallusers').then(res=>{
                setuser({
                    students:res.data
                });
                
            })
        }catch(err){
            console.log("error while getting users",err);
       }
    }) 
    
   
    return(
        <> 
          <table className='container-fluid text-center bg-light p-3'>
            <thead >
                <tr className='row p-3'>
                    <th className='col'>Name</th>
                    <th className='col'>Email</th>
                    <th className='col'>Phone number</th>
                </tr>
            </thead>
          </table>
          <table className='container-fluid'>
            <thead >

                {
                        Alluser.students.reverse().map(function(value,i){
                            return <tr className='bg-danger text-white text-center border border-dark'>
                                      <td className='border-end border-dark'>{value.name}</td>
                                      <td className='border-end border-dark'>{value.email}</td>
                                      <td className='border-end border-dark'>{value.number}</td>
                                      <Link to={`/Edit/${value._id}`} className='btn btn-danger text-dark' onClick={props.name} id="edit">Action</Link>
                                    </tr>
                            
                        })
                    }
            </thead>
          </table>
        </>
    )
}
export default Getallusers;