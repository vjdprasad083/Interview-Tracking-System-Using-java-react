import React from "react";
import TechService from "../Service/TechService";
import TechHeader from "./TechHeader";

class TechInterviewCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = { candidates: [] };
  }

  componentDidMount() {
    TechService.getInterviewCandidates(sessionStorage.getItem("id")).then(
      (response) => {
        this.setState({
          candidates: response.data,
        });
      }
    );
  }

  render() {
    return (
      <div>
        <TechHeader />
        <div align="container-fluid" className="students">
          <table className="table table-striped students-table ">
            <thead align="center">
              <tr>
                <th>Name</th>
                <th>Primary Skills</th>
                <th>Secondary Skills</th>
                <th>Experience (in years)</th>
                <th>Qualification</th>
                <th>Designation</th>
                <th>Notice Period (in months)</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody align="center">
              {this.state.candidates.map((candidate) => (
                <tr key={candidate.candidateId}>
                  <td>{candidate.candidateName} </td>
                  <td>{candidate.primarySkills}</td>
                  <td>{candidate.secondarySkills}</td>
                  <td>{candidate.experience}</td>
                  <td>{candidate.qualification}</td>
                  <td>{candidate.designation}</td>
                  <td>{candidate.noticePeriod}</td>
                  <td>{candidate.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TechInterviewCandidates;
