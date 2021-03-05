import { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { requestDeleteThing } from "../../actions/things";
import "./deleteBtn.css";
import DeleteImg from "../../images/delete.svg";

const DeleteBtn = ({ id }) => { 
  const dispatch = useDispatch();
  const page = useSelector((rootState) => rootState.things.page);
  const handleDeleteThing = useCallback(() => {
    dispatch(requestDeleteThing(id, page - 1));
  }, [id, page, dispatch]);
  
  return (
    <img
      src={DeleteImg}
      className="delete-btn"
      alt="delete"
      title="Delete thing?"
      onClick={handleDeleteThing}
    />
  );
}

export default DeleteBtn;
