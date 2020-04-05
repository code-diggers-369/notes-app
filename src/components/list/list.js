import React, { Component } from "react";

import "./list.css";

export default class list extends Component {
  render() {
    return (
      <div className="mt-3 container-fluid mb-3">
        <center>
          {this.props.data.length === 0 ? (
            <div className="notfound container p-1" style={{ width: "80%" }}>
              <h2>No Data Found....</h2>
            </div>
          ) : (
            <div className="container op">
              <h1>List</h1>
              <div className="flex row">
                {this.props.data.map((item) => (
                  <div className=" item" key={item.id}>
                    <h1>{item.title}</h1>
                    <h4>{item.data}</h4>

                    <button
                      onClick={() => this.props.deleteData(item.id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </center>
      </div>
    );
  }
}
