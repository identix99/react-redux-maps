import React from "react";
import { useSelector  } from "react-redux";
import { Row } from "./Row";
 

const Contact = () => {
  const data = useSelector((state) => {
    return state.layer1.contacts;
  });

 


//  console.log(data);

  return (
    <>
    
      <table className="table  shadow">
        <thead className="bg-danger text-white text-capitalize  ">
          <tr className="flex_pro p-3">
            <th className="col_1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  SELECT ALL
                </label>
              </div>
            </th>
            <th className="col_2"> name</th>
            <th className="col_3">phone number</th>
            <th className="col_4">email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact , index) => {
            return <Row data={contact} key={index} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export { Contact };
