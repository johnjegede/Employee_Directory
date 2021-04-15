import React from "react";

class EmployeeList extends React.Component {
  render() {
    if (this.props.employees[0]) {
      return (
        <table className="list-group table">
          <thread className="list-group-item">
            <tr className="row">
              <th className="col-lg-2">Image</th>
              <th className="col-lg-2">Name</th>
              <th className="col-lg-3">Email</th>
              <th className="col-lg-3">Phone</th>
              <th className="col-lg-2">DOB</th>
            </tr>
          </thread>
          <tbody>
            {this.props.employees.map((employee, index) => (
              <tr className="row" key={index}>
                <td className="col-lg-2">
                  <img src={employee.picture.thumbnail} alt="" />
                </td>
                <td className="col-lg-2">
                  {employee.name.first + " " + employee.name.last}
                </td>
                <td className="col-lg-3"> {employee.email}</td>
                <td className="col-lg-3"> {employee.phone}</td>
                <td className="col-lg-2"> {employee.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <>Employee not found</>;
    }
  }
}

export default EmployeeList;
