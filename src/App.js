import React, { Component } from "react";
import Input from "./components/input";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import List from "./components/list";
import "./App.css";
import uuid from "react-uuid";
import Joi from "joi-browser";

class App extends Component {
  state = {
    items: [
      { _id: "1", task: "sajib", priority: 0 },
      { _id: "2", task: "shahriar", priority: 0 },
      { _id: "3", task: "todo", priority: 0 },
      { _id: "4", task: "react", priority: 0 },
    ],
    item: null,
  };

  schema = {
    _id: Joi.string(),
    task: Joi.string().required().label("Task"),
  };

  handleChange = (e) => {
    const item = { ...this.state.item };
    if (e.currentTarget) item.task = e.currentTarget.value;
    //console.log("prechange", item);
    this.setState({ item });
    //console.log("Change", e.currentTarget.value, this.state.item);
  };

  handleSubmit = () => {
    console.log("App : handleSubmit");
    const newItem = { ...this.state.item };
    //console.log("handleSubmit", newItem);
    const items = [...this.state.items];
    if (newItem._id) {
      const index = items.findIndex((item, index) => {
        if (item._id === newItem._id) return true;
      });
      if (index !== -1) items[index] = newItem;
      else items.push(newItem);
    } else {
      newItem._id = uuid();
      items.push(newItem);
    }

    //console.log("New Items: ", items);
    this.setState({ items, item: null });
  };

  handleEdit = (item) => {
    console.log("handle edit", item);
    this.setState({ item });
  };

  handleSort = () => {
    const items = [...this.state.items];
    items.sort((a, b) => {
      if (a.task < b.task) return -1;
      return +1;
    });
    this.setState({ items });
  };

  handleDelete = (t) => {
    const items = this.state.items.filter((it) => it._id !== t._id);
    this.setState({ items });
    if (this.state.item === t) {
      const item = { ...this.state.item };
      item._id = null;
      this.setState({ item });
    }
  };

  handleDeleteAll = () => {
    //console.log("HandleDeleteAll");
    const items = [];
    this.setState({ items });
    if (this.state.item) {
      const item = { ...this.state.item };
      item._id = null;
      this.setState({ item });
    }
  };

  render() {
    console.log("render", this.state.items);
    return (
      <main className="container">
        <div>
          <div className="row">
            <div className="col">
              <h1 className="text-center">TODO</h1>
              <Input
                item={this.state.item}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
              <List
                items={this.state.items}
                onEdit={this.handleEdit}
                onSort={this.handleSort}
                onDelete={this.handleDelete}
                onDeleteAll={this.handleDeleteAll}
              ></List>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
