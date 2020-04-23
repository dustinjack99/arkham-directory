import React from "react";

const TableRows = (props) => {
  console.log(props);

  return (
    <>
      {props.results.map((e, i) => (
        <tr key={i}>
          <td>{e.user}</td>
          <td>{e.name.first}</td>
          <td>{e.name.last}</td>
          <td>{e.department.title}</td>
          <td>{e.department.name}</td>
          <td>{e.incarcerated && "Imprisoned"}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRows;
