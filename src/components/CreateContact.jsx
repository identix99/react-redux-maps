import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import {AddContact} from "../actions/index" ;
import { useNavigate } from "react-router-dom";

const CreateContact = () => {

  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [currdata, setdata] = useState({
    name : "",
    email : "",
    phone: "",
  });

  let name, value;
  let id = new Date().getTime().toString();

  const change =(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);
    value = e.target.value
    name = e.target.name

    setdata({  ...currdata , [name] : value , id : id  })
  }


  const sendnow =  async (event)=>{
    event.preventDefault();
     console.log(currdata);
   await dispatch(AddContact(currdata));
    navigate("/" , { replace: true })
  }

  return (
    <>
      <div className="create_form ">
        <form onSubmit={sendnow} >
          <h2 className="fw-bold text-danger text-uppercase fs-1 mb-5">
            Create Contact
          </h2>
          <div className="mb-3">
            <label htmlFor="namein" className="form-label fw-bold fs-3">
              Full Name
            </label>
            <input
             required
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              id="namein"
              name="name"
              value={currdata.name}
              onChange={change}
            
            />
            <div id="emailname" className="form-text">
              We'll never share your name with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label  htmlFor="emailin" className="form-label fw-bold fs-3">
              Email
            </label>
            <input
             required
              type="email"
              placeholder="Enter Your email"
              className="form-control"
              id="emailin"
              name="email"
              value={currdata.email}
              onChange={change}
             
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
               htmlFor="numberin"
              className="form-label  fw-bold fs-3"
            >
              Phone Number
            </label>
            <input
             required
              type="number"
              placeholder="Enter Your Phone Number"
              className="form-control"
              id="numberin"
              name="phone"
              value={currdata.phone}
              onChange={change}
         
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Phone Number with anyone else.
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary py-2 px-4 fs-3  mt-3"
             >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export { CreateContact };
