import React from "react";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        className="bg-white shadow-lg px-8 pt-6 pb-8"
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <div className="field">
          <div className="flex">
            <input
              className="bg-blue-grey-100 active:bg-blue-grey-900 text-blue-grey-700 w-full px-3 py-2 placeholder-blue-grey-700 leading-tight focus:border-blue-500 focus:outline-none mt-2 mr-1"
              type={"text"}
              name={"firstName"}
              onChange={this.handleChange}
              id={"firstName"}
              required={true}
              placeholder="First Name"
            />
            <input
              className="bg-blue-grey-100 active:bg-blue-grey-900 text-blue-grey-700 w-full px-3 py-2 placeholder-blue-grey-700 leading-tight focus:border-blue-500 focus:outline-none mt-2 ml-1"
              type={"text"}
              name={"lastName"}
              onChange={this.handleChange}
              id={"lastName"}
              required={true}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <input
              className="bg-blue-grey-100 active:bg-blue-grey-900 text-blue-grey-700 w-full px-3 py-2 placeholder-blue-grey-700 leading-tight focus:border-blue-500 focus:outline-none mt-2"
              type={"email"}
              name={"email"}
              onChange={this.handleChange}
              id={"email"}
              required={true}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="field mt-6">
          <div className="flex">
            <input
              className="bg-blue-grey-100 active:bg-blue-grey-900 text-blue-grey-700 w-full px-3 py-2 placeholder-blue-grey-700 leading-tight focus:border-blue-500 focus:outline-none mt-2 mr-1"
              type={"text"}
              name={"city"}
              onChange={this.handleChange}
              id={"city"}
              required={true}
              placeholder="City"
            />
            <input
              className="bg-blue-grey-100 active:bg-blue-grey-900 text-blue-grey-700 w-full px-3 py-2 placeholder-blue-grey-700 leading-tight focus:border-blue-500 focus:outline-none mt-2 ml-1"
              type={"text"}
              name={"state"}
              onChange={this.handleChange}
              id={"state"}
              required={true}
              placeholder="State"
            />
          </div>
        </div>
        <div className="field mt-6">
          <div className="control">
            <textarea
              className="bg-blue-grey-100 active:bg-blue-grey-900 text-blue-grey-700 w-full px-3 py-2 placeholder-blue-grey-700 leading-tight focus:border-blue-500 focus:outline-none mt-2"
              name={"message"}
              onChange={this.handleChange}
              id={"message"}
              required={true}
              placeholder="So we can best serve you, briefly tell us what you are looking for."
              rows="5"
            />
          </div>
        </div>
        <div className="field flex justify-center items-center">
          <button
            className="text-blue-grey-050 hover:text-blue-grey-900 bg-blue-grey-900 hover:bg-white border border-blue-grey-900 mt-8 px-8 py-2"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    );
  }
}
