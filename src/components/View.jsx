import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { useHistory } from "react-router-dom";




const View = () => {

  //const {first} = props;

  //const obj = document.getElementById("obj").value;

  //console.log(first);

  const [user, setUser] = useState([]);

  const [del, setDel] = useState([]);

  const history = useHistory();

  const show = () => {

    try {


      // setfirst(true);


      const url = "http://localhost:8080/getStudent";
      axios.get(url).then(async (res) => {
        //setUser(res.data);
        //console.log(res.data);
        setUser(res.data);
      })

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    show();

  }, [])


  const viewProfile = (id) => {



    history.push({
      pathname: `/Profile/${id}`
    });
  }

  const deleteProfile = (id) => {
    try {


      // setfirst(true);


      const url = `http://localhost:8080/deleteStudent/${id}`;
      axios.delete(url).then(async (res) => {
        //setUser(res.data);
        //console.log(res.data);
        //setUser(res.data);
        show();
      })

    } catch (error) {
      console.log(error);
    }
  }

  const editProfile = (id) => {



    history.push({
      pathname: `/edit/${id}`
    });
  }


  console.log(user);

  let counter = 1;

  return (
    <table className="table table-striped">
      <thead>
        <tr className="bg-dark">
          <th className="text-light" scope="col">#</th>
          <th className="text-light" scope="col">name</th>
          <th className="text-light" scope="col">email</th>
          <th className="text-light" scope="col">phone</th>
          <th className="text-light" scope="col">address</th>
          <th className="text-light" scope="col">Action</th>

        </tr>
      </thead>
      <tbody>
        {user?.map((student) =>

          <tr>
            <th scope="row">{counter++}</th>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.address}</td>
            <td >


              <button className='btn btn-success' onClick={() => {

                viewProfile(student._id)

              }}>view</button>





              <button className='btn btn-primary ms-2' onClick={() => {

                editProfile(student._id)

              }}>Edit</button>

              {/* <button className='btn btn-danger ms-2'  onClick={() => {

              deleteProfile(student._id)

            }}>Delete</button> */}



              <button type="button" className="btn btn-danger ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {

                setDel({
                  name: student.name,
                  id: student._id
                })
                console.log(student.name);
              }}>
                Delete
              </button>


              <div className="modal fade hidden" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Delete Selected entry</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      Are you sure, you want to delete the entry with name <span className='text-danger fs-3 fst-italic'>{del.name}</span>  ?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button className='btn btn-danger ms-2' onClick={() => {

                        deleteProfile(del.id)
                        console.log(del.id);

                      }} data-bs-dismiss="modal">Confirm</button>
                    </div>
                  </div>
                </div>
              </div>

            </td>
          </tr>
        )}

      </tbody>
    </table>
  )

}
export default View;
