import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HrService from "../Service/HrService";
import HrHeader from "./HrHeader";

const HrInterviews = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    HrService.getInterviewsById(sessionStorage.getItem('id')).then((response) => {
      setInterviews(response.data);
    });
  }, []);

  return (
    <div>
      <HrHeader />

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
            {interviews.map((interview) => (
              <tr key={interview.interviewSchduleId}>
                <td>{interview.interviewDate}</td>
                <td>{interview.candidate.candidateName}</td>
                <td>{interview.techRating}</td>
                <td>{interview.hrRating}</td>
                <td>{interview.panelMember.employee.employeeName}</td>
                <td>{interview.finalStatus}</td>

                <td>
                  <Link
                    className="btn btn-success"
                    to={`/GiveHrRating/${interview.interviewSchduleId}`}
                  >
                    Give Rating
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrInterviews;