import React from "react";
import Avatar from "react-avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
import { DeletcontactsAction } from "../../actions/index";
import { useDispatch } from "react-redux";

export const Row = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <>
        <tr className="flex_pro px-3 py-1" key={props.data.id}>
          <td className="col_1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {props.data.id}
              </label>
            </div>
          </td>
          <td className="col_2">
            <Avatar
              name={props.data.name}
              size="50"
              round={true}
              className="avtarx"
              value="86%"
            />

            <p> {props.data.name}</p>
          </td>
          <td className="col_3">{props.data.phone}</td>
          <td className="col_4">{props.data.email}</td>
          <td className="col_5">
            <Link
              to={`/EditContactpage/${props.data.id}`}
              className="me-3 logox  "
            >
              <EditIcon />
            </Link>

            <button className=" bg-danger logox ">
              <DeleteIcon />
            </button>
          </td>
        </tr>
      </>
    </>
  );
};
