import React from "react";
import CandidateService from "../Service/CandidateService";
import { Link } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import EditCandidate from "./EditCandidate";
import SaveInterview from "../InterviewSchedule/SaveInterview";

class ShowCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { candidates: [] };
  }

  componentDidMount() {
    CandidateService.getCandidates().then((response) => {
      this.setState({
        candidates: response.data,
      });
    });
  }

 

  render() {
    
    const onComponentChange = this.props.onComponentChange;
    const deleteCandidate = (id) => {
      CandidateService.deleteCandidate(id).then((response) => {
        alert("deleted successfully");
        CandidateService.getCandidates().then((response) => {
          this.setState({
            candidates: response.data,
          });
        });
      });
    };

    return (
      <div>
        {/* <AdminHeader /> */}
        <div align="container-fluid" className="students">
          <table className="table table-striped students-table ">
            <thead align="center">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Primary Skills</th>
                <th>Secondary Skills</th>
                <th>Experience</th>
                <th>Qualification</th>
                <th>Designation</th>
                <th>Notice Period</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody align="center">
              {this.state.candidates.map((candidate) => (
                <tr key={candidate.candidateId}>
                  <td>{candidate.candidateId}</td>
                  <td>{candidate.candidateName} </td>
                  <td>{candidate.primarySkills}</td>
                  <td>{candidate.secondarySkills}</td>
                  <td>{candidate.experience}</td>
                  <td>{candidate.qualification}</td>
                  <td>{candidate.designation}</td>
                  <td>{candidate.noticePeriod}</td>
                  <td>{candidate.location}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => onComponentChange(<EditCandidate onComponentChange={this.props.onComponentChange}  id={candidate.candidateId} />)}>
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCandidate(candidate.candidateId)}>
                      Delete
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-success"
                      onClick={() => onComponentChange(<SaveInterview onComponentChange={this.props.onComponentChange} id={candidate.candidateId} />)}>
                      Schedule
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ShowCandidates;
