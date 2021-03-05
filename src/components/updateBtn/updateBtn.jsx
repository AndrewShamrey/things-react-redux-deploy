import React from "react";
import { useDispatch } from "react-redux";
import { showModal, setCurrentId } from "../../actions/modal";
import "./updateBtn.css";
import UpdateImg from "../../images/update.svg";

const UpdateBtn = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <img
      src={UpdateImg}
      className="update-btn"
      alt="update"
      title="Update thing?"
      onClick={() => {
        dispatch(showModal());
        dispatch(setCurrentId(id));
      }}
    />
  );
};

export default UpdateBtn;
