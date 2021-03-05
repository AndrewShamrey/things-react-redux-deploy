import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInputChange } from "../../actions/modal";

const Labels = () => {
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.modal.attributes);
  const countLabels = attributes.length - 1;

  const handleChangeInput = useCallback((e) => {
    dispatch(handleInputChange(e));
  }, [dispatch]);

  return (
    <div className="other-labels">
      {Array(countLabels - 1).fill().map((item, index) => {
          return (
            <label key={index}>
              <input
                type="text"
                name="name"
                className="input-name"
                placeholder="attribute"
                value={attributes.slice(1, -1)[index].name}
                index={`${index + 1}`}
                onChange={handleChangeInput}
              />
              <input
                type="text"
                name="value"
                className="input-value"
                placeholder="value"
                value={attributes.slice(1, -1)[index].value}
                index={`${index + 1}`}
                onChange={handleChangeInput}
              />
            </label>
          );
        })}
    </div>
  );
};

export default Labels;
