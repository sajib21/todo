import React from "react";

const Input = (props) => {
  const { item, onChange, onSubmit } = props;
  return (
    <div className="card card-body my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Add a task"
            value={item ? item.task : ""}
            onChange={onChange}
          />
        </div>
        <button
          className={
            item && item._id
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
          type="submit"
        >
          {item && item._id ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Input;
