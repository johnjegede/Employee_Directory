import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import "./styles.css";


class EmployeeContainer extends React.Component {
  state = {
    employees: [],
    employeesList: [],
  };

  componentDidMount() {
    this.getEmployee();
  }

  sortArr(a, b) {
    var textA = a.name.first.toUpperCase();
    var textB = b.name.first.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }

  getEmployee = () => {
    API.get()
      .then((res) => {
        res.data.results.sort(this.sortArr);
        this.setState({
          ...this.state,
          employees: res.data.results,
          employeesList: res.data.results,
        });
        console.log(this.state.employeesList);
      })
      .catch((err) => console.log(err));
  };


  handleInputChange = (event) => {
    let value = event.target.value.toLowerCase();
    console.log(value);
    if (value.length > 0) {
      let filteredEmployees = this.state.employees.filter((employee) => {
        if (
          employee.name.first.toLowerCase().includes(value) ||
          employee.name.last.toLowerCase().includes(value) ||
          employee.email.toLowerCase().includes(value) ||
          employee.phone.toLowerCase().includes(value) ||
          employee.dob.date.toLowerCase().includes(value)
        ) {
          return employee;
        } else {
          return false;
        }
      });
      this.setState({ ...this.state, employees: filteredEmployees });
    } else {
      this.setState({ ...this.state, employees: this.state.employeesList });
    }
    console.log(this.state.employees);
  };

  render() {
    return (
      <div>
        <header className = "header">
          <h1>Employee Directory</h1>
        </header>
        <EmployeeForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeContainer;
