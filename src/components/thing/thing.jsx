import React from "react";
import UpdateBtn from "../updateBtn/updateBtn";
import DeleteBtn from "../deleteBtn/deleteBtn";
import "./thing.css";

const Thing = ({ data }) => {
  const allKeys = Object.getOwnPropertyNames(data);
  
  return (
    <div className="thing-container">
      <UpdateBtn id={data.id} />
      <DeleteBtn id={data.id} />
      <span>{"{"}</span>
      {allKeys.map((item, index) => {
        return (
          <p key={index} className="thing-key">
            "{item}": <span className="thing-value">{JSON.stringify(data[item])}</span>
          </p>
        );
      })}
      <span>{"}"}</span>
    </div>
  );
};

export default Thing;
