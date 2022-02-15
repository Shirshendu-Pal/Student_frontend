import React , {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import  background  from "../assets/fullbackground.jpg";

const Profile = () => {


    

    const {id} = useParams();

    console.log(id);

    const [user, setUser] = useState([])

    const showProfile = () =>{

        try{
  
          
          // setfirst(true);
           
          
           const url = `http://localhost:8080/viewStudent/${id}`;
           axios.get(url).then(async (res) =>{
             //setUser(res.data);
               //console.log(res.data);
               setUser(res.data[0]);
           })
          
       }catch(error){
           console.log(error);
       }
       }

       
       useEffect(() => {
         
       showProfile();
         
       }, [])


  return (
      <div>
    
       
        <div className="card container-fluid row mt-3 align-items-center bg-warning bg-opacity-10" style={{backgroundImage:`url(${background})`, width: "50%", marginLeft: "30%"}} >
  <div className="card-body text-center">
    <h5 className="card-title">name: <span className='text-success'> {user.name}</span></h5>
    <h6 className="card-subtitle mb-2">email: <span className='text-primary'> {user.email} </span> </h6>
    <h6 className="card-text">address:<span className='text-primary'> {user.address} </span> </h6>
    <h6 className="card-text">phone: <span className='text-primary'> {user.phone} </span></h6>
   
  </div>
</div>
        
            </div>
            
  )
}

export default Profile;
