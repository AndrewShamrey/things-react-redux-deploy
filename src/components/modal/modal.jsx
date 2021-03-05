import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, handleInputChange, addLabel, requestSendThing } from "../../actions/modal";
import Labels from "../labels/labels";
import "./modal.css";
import Done from "../../images/done.svg";

function Modal() {
  const dispatch = useDispatch();
  const showClass = useSelector((state) => state.modal.showClass);
  const attributes = useSelector((state) => state.modal.attributes);
  const warningClass = useSelector((state) => state.modal.warningClass);

  const clickDone = useCallback(() => {
    dispatch(requestSendThing());
  }, [dispatch]);

  const handleCloseModal = useCallback((e) => {
    if (e.target.classList.contains("modal-visible")) {
      dispatch(closeModal());
    }
  }, [dispatch]);

  const handleChangeInput = useCallback((e) => {
    dispatch(handleInputChange(e));
  }, [dispatch]);
  
  const handleAddLabel = useCallback(() => {
    dispatch(addLabel());
  }, [dispatch]);

  return (
    <div className={`modal-wrapper ${showClass} ${warningClass}`} onClick={handleCloseModal} >
        <div className="modal-content">
          <form className="modal-form">
            <label>
              <input
                className="input-name"
                disabled="disabled"
                index="0"
                name="name"
                type="text"
                value={attributes[0].name}
                onChange={handleChangeInput}
              />
              <input
                className="input-value"
                index="0"
                name="value"
                type="text"
                value={attributes[0].value}
                placeholder="value"
                onChange={handleChangeInput}
              />
            </label>
            <Labels />
          </form>
          <div className="buttons">
            <p className="add-attribute" onClick={handleAddLabel}>
              Add attribute?
            </p>
            <img
              className="modal-done"
              src={Done}
              alt="done"
              title="Send info?"
              onClick={clickDone}
            />
          </div>
        </div>
    </div>
  );
}

export default Modal;
