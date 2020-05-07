import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  render() {
    const { items, onEdit, onDelete, onDeleteAll } = this.props;
    return (
      <ul className="list-group my-3">
        <h3 className="text-center">Todo List</h3>
        {items.map((it) => (
          <Item key={it._id} data={it} onEdit={onEdit} onDelete={onDelete} />
        ))}
        <button
          type="button"
          className="btn btn-block btn-danger mt-3"
          onClick={onDeleteAll}
        >
          Delete All
        </button>
      </ul>
    );
  }
}

export default List;
