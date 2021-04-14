import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
      API.search()
         .then(res => this.setState({ results: res.data.data}))
         .catch(err => console.log(err));
  };

}
export default EmployeeContainer;
