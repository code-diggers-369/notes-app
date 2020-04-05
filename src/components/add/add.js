import React, { Component } from "react";

import "./add.css";

import List from "../list/list";
import Head from "../head/head";

export default class add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: 0,
      title: "",
      data: [],
      copy: [],
      edit: false,
    };
  }

  saveData = async (e) => {
    var text = this.state.text;
    var id = this.state.id;
    var title = this.state.title;

    var ob = {
      id: id,
      title: title,
      data: text,
    };

    if (title) {
      if (text && text.length <= 150) {
        await this.setState({
          data: this.state.data.concat(ob),
          copy: this.state.data.concat(ob),
          text: "",
          id: id + 1,
          title: "",
        });
        console.log(this.state.data);
      } else {
        alert("Please Enter Valid Length Data");
      }
    } else {
      alert("Please Enter Title");
    }
  };

  deleteData = async (id) => {
    const filter = this.state.data.filter((item) => item.id !== id);

    this.setState({
      data: filter,
      copy: filter,
    });

    console.log(filter);
  };

  searchData = async (word) => {
    if (word) {
      const copyData = this.state.data.filter(
        (item) => item.title.indexOf(word) !== -1
      );

      this.setState({
        data: copyData,
        edit: true,
      });

      console.log(copyData);
    } else {
      this.setState({
        data: this.state.copy,
        edit: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Head searchData={this.searchData} />
        <center>
          <div className="container-fluid">
            <section className="container mt-3 enter text-light p-3">
              <label htmlFor="h1">
                <h1 name="h1">Enter Notes</h1>
              </label>
              <br />
              <textarea
                placeholder="Enter Title Here"
                className="mb-2 addtitle tittle"
                type="text"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <br></br>
              <textarea
                className="daat"
                style={{ fontSize: "20px" }}
                placeholder="Enter Notes Here...."
                onChange={(e) => this.setState({ text: e.target.value })}
                value={this.state.text}
              ></textarea>
              <br></br>
              Length:{" "}
              {this.state.text.length <= 150 ? (
                <span style={{ color: "white" }}>{this.state.text.length}</span>
              ) : (
                <span style={{ color: "red" }}>{this.state.text.length}</span>
              )}
              /150
              <br />
              <button
                onClick={(e) => this.saveData(e)}
                className="btn-lg mt-2 btn-light"
              >
                Save
              </button>
            </section>
          </div>
        </center>
        <List
          edit={this.state.edit}
          data={this.state.data}
          deleteData={this.deleteData}
        />
      </div>
    );
  }
}
