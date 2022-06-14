import React, { Component } from "react";
export default class CardProduct extends Component {
  render() {
    var person = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-name">{person.name}</h5>
          <p className="card-email">{person.email}</p>
          <button className="card-conpamy.name" onClick={() => myFunc()}>
            myButton
          </button>
        </div>
      </div>
    );
    function myFunc() {
      alert(person.company.name);
    }
  }
}
