import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import interviewScheduleService from "../Service/InterviewScheduleService";
import EditInterview from "./EditInterview";

class ShowInterviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { interviews: [] };
  }

  componentDidMount() {
    this.getInterviews(); 
    this.startFetchingData();
  }

  componentWillUnmount() {
    this.stopFetchingData();
  }

  getInterviews = () => {
    interviewScheduleService.getInterviews().then((response) => {
      this.setState({
        interviews: response.data,
      });
    });
  };

  startFetchingData = () => {
    this.fetchDataInterval = setInterval(() => {
      this.getInterviews();
    }, 5000); 
  };

  stopFetchingData = () => {
    clearInterval(this.fetchDataInterval);
  };

  render() {
    const onComponentChange = this.props.onComponentChange;
    const deleteInterview = (id) => {
      interviewScheduleService.deleteInterview(id).then((response) => {
        alert("deleted successfully");
        this.getInterviews().then((response) => {
          this.setState({
            interviews: response.data,
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
                <th>interviewDate</th>
                <th>Candidate Name</th>
                <th>techRating</th>
                <th>hrRating</th>
                <th>Panelmember Name</th>
                <th>finalStatus</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody align="center">
              {this.state.interviews.map((interview) => (
                <tr key={interview.interviewSchduleId}>
                  <td>{interview.interviewDate}</td>
                  <td>{interview.candidate.candidateName}</td>
                  <td>{interview.techRating}</td>
                  <td>{interview.hrRating}</td>
                  <td>{interview.panelMember.employee.employeeName}</td>
                  <td>{interview.finalStatus}</td>

                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={()=>this.props.onComponentChange(<EditInterview onComponentChange = {onComponentChange} id={interview.interviewSchduleId} />)}>
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        deleteInterview(interview.interviewSchduleId)
                      }>
                      DELETE
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

export default ShowInterviews;
