import React, { Component } from "react";

import "./head.css";

export default class head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  findItem = async e => {
    var val = e.target.value;

    this.setState({
      text: val
    });

    this.props.searchData(e.target.value);
  };

  render() {
    return (
      <div>
        <header className="container-fluid">
          <center>
            <div className="header row">
              <div className="col-lg-4">
                <span className="title">Hp's Notes</span>
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  id="search"
                  value={this.state.text}
                  onChange={e => this.findItem(e)}
                  style={{ padding: "3px" }}
                />
                <button className="btn-lg ml-2 mt-1 btn-secondary">
                  Search
                </button>
              </div>
            </div>
          </center>
        </header>
      </div>
    );
  }
}
