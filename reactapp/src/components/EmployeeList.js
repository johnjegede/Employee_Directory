import React from "react";

function EmployeeList(props) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" >Name</th>
          <th scope="col" className="email">Email</th>
          <th scope="col" className="city">location</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
          {props.employees.map(result=>( 
          <tr key={result.id.value}>
            <td><img src={result.picture.thumbnail} alt=""/> </td>
            <td>{result.name.first} {result.name.last}</td>
            <td className="email">{result.email}</td>
            <td className="city">{result.location.city}</td>
            
        </tr>
          ))}
        
      </tbody>
    </table>
  );
}

export default EmployeeList;