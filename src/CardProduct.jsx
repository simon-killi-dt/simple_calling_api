import React, { Component } from "react";
export default class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-name">
            {this.props.data.name}, {this.props.data.id}
          </h5>
          <p className="card-email">{this.props.data.email}</p>
          <button onClick>Show More</button>
        </div>
      </div>
    );
  }
}
