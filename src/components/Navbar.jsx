import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  let activeClassName = "active_tab";



  return (
    <>
      <nav className="flex align-center">
        <p>
          <span>Code</span>pen
        </p>
        <ul>
          <li className="big-screens">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            >Contact</NavLink>
            <NavLink to="/CreateContactpage" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            >
              <button className="button-87">Create Contact</button>
            </NavLink>
            <button className="btn register">Log Out</button>
          </li>
          <li className="small-screens">
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};













 


//class traversing-----------------------------
// const Toggle_buttons = () => {

//   const [currset, setclass] = useState({
//     activeObj: null,
//     obj: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
//   })




//   const togelactive = (index) => {
//     setclass({ ...currset, obj: currset.obj[index] })
//   }

//   const toggalclass = (index) => {
//     if (currset.obj[index] === currset.activeObj) {
//       return "active-link1 etc";
//     } else {
//       return "inactive-link1 etc";
//     }
//   }

//   return (
//     <>
//       <ul className="menu_block">
//         {currset.obj.map((index) => {
//           return (
//             <li key={index} className={toggalclass(index)} onClick={() => {
//               togelactive(index)
//             }}>Blog </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }








export { Navbar  };
