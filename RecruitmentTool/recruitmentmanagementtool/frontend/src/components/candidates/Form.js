import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCandidates } from "../../actions/candidates";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    description: "",
  };
  static propTypes = {
    addCandidates: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, cv, description } = this.state;
    const candidate = { name, email, description };
    this.props.addCandidates(candidate);
    this.setState({
      name: "",
      email: "",
      description: "",
    });
  };
  render() {
    const { name, email, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Candidate</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCandidates })(Form);
