import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="py-5 bg-dark mt-4">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2022
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
