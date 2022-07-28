import React , {useState , useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { Row } from "./Row";
import { SelectAllContactsAction ,  UNSELECTALLAllContactsAction , ClearAllContactsAction  } from "../../actions/index";
 

const Contact = () => {
  const data = useSelector((state) => state.layer1.contacts);
  const SelectedCon = useSelector((state) => state.layer1.selectedContacts);
  
  //  console.log(data);
   const [ selectall , setSelectall ] = useState(false);
   const dispatch = useDispatch();
 
   useEffect(()=>{
    if(selectall){
      dispatch( SelectAllContactsAction (data.map((cons)=> cons.id )))
    }else{
      dispatch(UNSELECTALLAllContactsAction())
    }

   },[selectall])


 

  return (
    <>
      {
        SelectedCon.length > 0 ?  (<button className="bg-danger btn mb-3 text-capitalize text-white fw-bold p-3" onClick={()=>dispatch(ClearAllContactsAction())}>Delet items</button>)  : null
      }
      <table className="table  shadow">
        <thead className="bg-danger text-white text-capitalize  ">
          <tr className="flex_pro p-3">
            <th className="col_1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={selectall}
                  id="selectall1"
                  onClick={()=>setSelectall(!selectall)}
                />
                <label className="form-check-label" htmlFor="selectall1">
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
            return <Row data={contact} key={index} checkboxState={selectall} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export { Contact };
