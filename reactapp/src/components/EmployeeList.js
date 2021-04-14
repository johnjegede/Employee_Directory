import React from "react";

let styles = {
  textAlign: "center",
};

class EmployeeList extends React.Component {
  render() {
    if (this.props.employees[0]) {
      return (
        <table className="list-group" style={styles}>
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
              <tr key={index}>
                <td>
                  <img src={employee.picture.thumbnail} alt = ""/>
                </td>
                <td> {employee.name.first + " " + employee.name.last}</td>
                <td> {employee.email}</td>
                <td> {employee.phone}</td>
                <td> {employee.dob.date}</td>
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
