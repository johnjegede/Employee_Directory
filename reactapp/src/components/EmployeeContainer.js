import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: [],
  };

  componentDidMount() {
    this.getEmployee();
  }

  getEmployee = () => {
    API.get()
      .then((res) => this.setState({ employees: res.data.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    if (value.length > 0) {
      let filterEmployees = this.state.employees.filter((employee) => {
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
      this.setState({ ...this.state, employees: filterEmployees });
    } else {
      //this.setState({...this.state, employees: this.state.originalList});
    }
    console.log(this.state.employees);
  };

  render() {
    return (
      <div>
        <EmployeeForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeContainer;
