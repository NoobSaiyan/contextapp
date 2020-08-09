import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Design of everyday things</li>
          <li>The discovery of slowness</li>
          <li>The final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
