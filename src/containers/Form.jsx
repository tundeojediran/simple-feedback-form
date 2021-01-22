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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input /> {/* Name of the user */}
        <Input /> {/* Email of the user */}
        <Select /> {/* reason of contact selection */}
        <TextArea /> {/* Description */}
        <Button /> {/*Submit */}
        <Button /> {/* Clear the form */}
      </form>
    );
  }
}

export default FormContainer;
