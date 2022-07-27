import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddContact, Fillcontacts , Updatecontacts} from "../actions/index";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  //console.log(id);

  const dispatch = useDispatch();

  const Selector = useSelector((state) => state.layer1.Fillcontacts);
 // console.log(Selector);

  let navigate = useNavigate();
  
  const [currdata, setdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  let name, value;
  let _id = new Date().getTime().toString();

  const change = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    value = e.target.value;
    name = e.target.name;

    setdata({ ...currdata, [name]: value, id: _id });
  };

  useEffect(() => {
    if (Selector != null) {
     
      setdata({
       
        name: Selector.name,
        email: Selector.email,
        phone: Selector.phone,
      });
    }

    dispatch(Fillcontacts(id));
  }, [Selector]);


  const onUpdateContact = (e) => {
      e.preventDefault();
   
     // console.log(currdata);
      // console.log(Selector);

      const  updatedData =  {
        name: currdata.name,
        email: currdata.email,
        phone: currdata.phone,
      } 
    const Sendupdateddata  = Object.assign(Selector , updatedData )
      

    //duspatch update and redirect to contact page
     dispatch(Updatecontacts(Sendupdateddata))
      navigate("/" , { replace: true })

  };

  return (
    <>
      <div className="create_form ">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <h2 className="fw-bold text-danger text-uppercase fs-1 mb-5">
            Edit Contact
          </h2>
          <div className="mb-3">
            <label htmlFor="namein1" className="form-label fw-bold fs-3">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              id="namein1"
              name="name"
              value={currdata.name}
              onChange={change}
            />
            <div id="emailname" className="form-text">
              We'll never share your name with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="emailin1" className="form-label fw-bold fs-3">
              Email
            </label>
            <input
              required
              type="email"
              placeholder="Enter Your email"
              className="form-control"
              id="emailin1"
              name="email"
              value={currdata.email}
              onChange={change}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="numberin2" className="form-label  fw-bold fs-3">
              Phone Number
            </label>
            <input
              required
              type="text"
              placeholder="Enter Your Phone Number"
              className="form-control"
              id="numberin2"
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
            className="btn btn-warning py-2 px-4 fs-3  mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export { EditContact };
