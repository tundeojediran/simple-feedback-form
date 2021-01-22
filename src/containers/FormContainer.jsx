import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      reason: "",
      description: "",

      reasonOptions: [
        "My account was debited",
        "My card is expired",
        "My transaction failed",
        "Others"
      ]
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInputChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  }

  handleDescriptionChange(e) {
    let value = e.target.value;
    this.setState({ description: value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(`name => ${this.state.name}`);
    console.log(`email => ${this.state.email}`);
    console.log(`reason => ${this.state.reason}`);
    console.log(`description => ${this.state.description}`);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      reason: "",
      description: ""
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInputChange}
        />
        <Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInputChange}
        />
        <Select
          title={"Reason of contact"}
          name={"reason"}
          options={this.state.reasonOptions}
          value={this.state.reason}
          placeholder={"Select reason"}
          handleChange={this.handleInputChange}
        />
        <TextArea
          title={"Description"}
          rows={10}
          value={this.state.description}
          name={"description"}
          handleChange={this.handleDescriptionChange}
          placeholder={"Describe your challenge"}
        />
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
