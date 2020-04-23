import React, { Component } from "react";
import Table from "./table";
import SearchButtons from "./searchbuttons";
import Users from "../data/users.json";

class Container extends Component {
  state = {
    results: Users.results,
    search: "All Inmates",
  };

  getInmatesAll = () => {
    this.setState({ results: Users.results }, () => {});
  };

  getInmatesWard = (ward) => {
    let wardUsers = [];

    for (let i = 0; i < Users.results.length; i++) {
      if (ward === Users.results[i].department.name) {
        let user = Users.results[i];
        wardUsers.push(user);
      }
    }
    this.setState({ results: wardUsers }, () => {});
  };

  getInmatesInc = () => {
    let incUsers = [];

    for (let i = 0; i < Users.results.length; i++)
      if (Users.results[i].incarcerated) {
        let user = Users.results[i];
        incUsers.push(user);
      }

    this.setState({ results: incUsers }, () => {});
  };

  handleFormSubmit = (query, ward) => {
    if (query === "All Inmates") {
      this.setState({ results: "All Inmates" });
      this.getInmatesAll(this.state.search);
    } else if (query === "Incarceration") {
      this.setState({ results: "Incarceration" });
      this.getInmatesInc(this.state.search);
    } else if (query === "Ward") {
      this.setState({ results: "Ward" });
      this.getInmatesWard(ward);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const ward = e.target.textContent;
    this.setState({
      [name]: value,
    });
    this.handleFormSubmit(value, ward);
  };

  render() {
    return (
      <>
        <Table results={this.state.results} />
        <SearchButtons
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
      </>
    );
  }
}

export default Container;
