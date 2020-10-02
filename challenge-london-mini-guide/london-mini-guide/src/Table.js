import React, { useState, useEffect } from "react";
import "./App.css";

const Table = () => {
  return (
    <div>
      <table>
        <tr className="tableRow">
          <th>#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Website</th>
        </tr>

        <tr className="tableRow">
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
