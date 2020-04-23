import React from "react";
import TableRows from "./tablerows";

const Table = (props) => {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <th className="table" data-text="Username">
            Username
          </th>
          <th className="table" data-text="First Name">
            First Name
          </th>
          <th className="table" data-text="Last Name">
            Last Name
          </th>
          <th className="table" data-text="Profession">
            Profession
          </th>
          <th className="table" data-text="Ward">
            Ward
          </th>
          <th className="table" data-text="Incarcerated">
            Incarcerated
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRows results={props.results} />
      </tbody>
    </table>
  );
};

export default Table;
