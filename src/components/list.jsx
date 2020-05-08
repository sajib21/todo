import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  render() {
    const { items, onEdit, onSort, onDelete, onDeleteAll } = this.props;
    return (
      <ul className="list-group my-3">
        <h3 className="text-center">Todo List</h3>
        {items.map((it) => (
          <Item key={it._id} data={it} onEdit={onEdit} onDelete={onDelete} />
        ))}
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-block btn-primary mt-3 mr-2"
            onClick={onSort}
          >
            Sort
          </button>
          <button
            type="button"
            className="btn btn-block btn-danger mt-3 ml-2"
            onClick={onDeleteAll}
          >
            Delete All
          </button>
        </div>
      </ul>
    );
  }
}

export default List;
