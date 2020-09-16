import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCandidates, delCandidates } from "../../actions/candidates";

export class Candidates extends Component {
  static propTypes = {
    candidates: PropTypes.array.isRequired,
    getCandidates: PropTypes.func.isRequired,
    delCandidates: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getCandidates();
  }

  render() {
    return (
      <Fragment>
        <h2>Candidates</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                
                <td>{candidate.description}</td>
                <td>
                  <button
                    onClick={this.props.delCandidates.bind(this, candidate.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  candidates: state.candidates.candidates,
});

export default connect(mapStateToProps, { getCandidates, delCandidates })(
  Candidates
);
