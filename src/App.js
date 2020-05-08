import React, { Component } from "react";
import Input from "./components/input";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import List from "./components/list";
import "./App.css";
import uuid from "react-uuid";

class App extends Component {
  state = {
    items: [
      { _id: "1", task: "sajib" },
      { _id: "2", task: "shahriar" },
      { _id: "3", task: "todo" },
      { _id: "4", task: "react" },
    ],
    item: null,
  };

  handleChange = (e) => {
    const item = { ...this.state.item };
    if (e.currentTarget) item.task = e.currentTarget.value;
    //console.log("prechange", item);
    this.setState({ item });
    //console.log("Change", e.currentTarget.value, this.state.item);
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
