import React, { Component } from "react";

class Item extends Component {
  render() {
    const { data, onDelete } = this.props;
    return (
      <li
        key={data._id}
        className="list-group-item d-flex justify-content-between my-2"
      >
        <h6>{data.task}</h6>
        <div>
          <span className="mx-2 text-success">
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash" onClick={() => onDelete(data)} />
          </span>
        </div>
      </li>
    );
  }
}

export default Item;
