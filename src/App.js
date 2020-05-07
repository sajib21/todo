import React, { Component } from "react";
import Input from "./components/input";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import List from "./components/list";

class App extends Component {
  state = {
    items: ["sajib", "shahriar", "todo", "react"],
    item: "",
  };

  handleChange = (e) => {
    // console.log(e.currentTarget.value);
    this.setState({ item: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = this.state.item;
    const items = [...this.state.items, newItem];
    //console.log("New Items: ", items);
    this.setState({ items, item: "" });
  };

  handleDelete = (t) => {
    const items = this.state.items.filter((it) => it !== t);
    this.setState({ items });
  };

  handleDeleteAll = () => {
    //console.log("HandleDeleteAll");
    const items = [];
    this.setState({ items });
  };

  render() {
    console.log(this.state.items);
    return (
      <React.Fragment>
        <main className="container">
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
                onDelete={this.handleDelete}
                onDeleteAll={this.handleDeleteAll}
              ></List>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
