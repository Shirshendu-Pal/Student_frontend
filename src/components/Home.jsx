import React, {useState} from 'react'

import { useHistory } from "react-router";

import axios from 'axios';


const Home = () => {

    //const [first, setfirst] = useState(false);

    const [user,setUser] = useState({
        
        email:"",
        name:"",
        address:"",
        phone:""
    })

    const history = useHistory();
    
    let name, value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value

        setUser({...user, [name]:value});

    }

    

    const postData = (e) =>{

        try{

        
       // setfirst(true);
        e.preventDefault();

        const url = "http://localhost:8080/registerStudent";
        axios.post(url,user).then((res) =>{
            console.log(res);
        })
        history.push("/View");
    }catch(error){
        console.log(error);
    }
    }

    //console.log(first);




    return (
       

        
        <div style={{width: "50%", marginLeft: "30%"}}>
        <div className='container-fluid row mt-3 align-items-center'  >
        
         

        <form method="POST" id="registerForm" className='bg-warning bg-opacity-10 rounded-3' >
            <h1 className='text-center text-primary'>Registration form</h1>
            <div className="mb-3 col">
                <label htmlFor="email" className="form-label" style={{marginTop: "20px"}}>Email Id</label>
                <input type="email" name="email" className="form-control" id="email" value={user.email} onChange={handleInputs} />
            </div>

            <input type="hidden"  id="obj"  value={user} />

            <div className="mb-3 col">
                <label htmlFor="address" className="form-label" >Name</label>
                <input type="text" name="name" className="form-control" id="address" value={user.name} onChange={handleInputs}/>
            </div>


            <div className="mb-3 col">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" name="address" className="form-control" id="address" value={user.address}  onChange={handleInputs}/>
            </div>


            <div className="mb-3 col">
                <label htmlFor="address" className="form-label">Phone</label>
                <input type="text" name="phone" className="form-control" id="address" value={user.phone} onChange={handleInputs} />
            </div>

            
            <button className="btn btn-primary" onClick={postData} style={{marginLeft: "40%", marginBottom:"20px"}} >Submit</button>
        </form>
        

       

        </div>
        </div>
        
       

    )
}

export default Home;
