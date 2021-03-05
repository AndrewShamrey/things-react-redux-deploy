import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from '../../actions/modal';
import "./allThings.css";
import Thing from "../thing/thing";
import Modal from "../modal/modal";

const AllThings = ({ forRef, things }) => {
  const dispatch = useDispatch();
  const handleShowModal = useCallback((e) => {
    dispatch(showModal());
  }, [dispatch]);
  
  return (
    <div ref={forRef} className="all-things-wrapper">
      <Modal />
      <p className="add-thing" onClick={handleShowModal}>Add new Thing?</p>
      {things.map((item, index) => {
        return <Thing key={index} data={item} />;
      })}
    </div>
  );
};

export default AllThings;
