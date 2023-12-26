import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import CandidateService from "../Service/CandidateService";
import InterviewScheduleService from "../Service/InterviewScheduleService";
import PanelMemberService from "../Service/PanelMemberService";
import ShowInterviews from "../InterviewSchedule/ShowInterviews";

function SaveInterview(props) {

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id, onComponentChange } = props;

  const [panelMembers, setPanelMembers] = useState([]);

  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    const getEmployee = async () => {
      PanelMemberService.getPanelMembers().then((response) => {
        setPanelMembers(response.data);
      });
    };
    getEmployee();
  }, []);

  useEffect(() => {
    if (id) {
      getCandidateById(id);
    }
  });

  const getCandidateById = async (id) => {
    let candidate = await (await CandidateService.getCandidateById(id)).data;
    setCandidate(candidate);
  };

  const addInterview = (data) => {
    console.log(data);
    InterviewScheduleService.scheduleInterview(id, data.panelMember, data).then(
      (response) => {
        alert("Added successfully");
        // history("/ShowInterviews");
        onComponentChange(<ShowInterviews onComponentChange = {onComponentChange} />)
      }
    );
  };

  return (
    <div>
      {/* <AdminHeader /> */}
      <div className="addCandidate">
        <div className="addCandidate-form">
          <form onSubmit={handleSubmit(addInterview)}>
            <input
              type="text"
              name="candidate"
              placeholder="Candidate Id"
              value={candidate.candidateName}
              className="form-control"
              {...register("candidate", { maxLength: 20 })}/>
            <br />
            {errors.candidate && errors.candidate.type === "maxLength" && (
              <span className="error">
                Candidate Id must not contain more than 20 charcters
              </span>
            )}

            <select
              name="panelMember"
              className="form-control"
              {...register("panelMember", { required: true })}>
              <option>--Select Interviewer--</option>
              {panelMembers.map((panel) => (
                <option key={panel.panelMemberId} value={panel.panelMemberId}>
                  {panel.employee.employeeName}
                </option>
              ))}
            </select>
            <br />
            <input
              type="Date"
              name="interviewDate"
              placeholder="Interview Date"
              className="form-control"
              {...register("interviewDate", { required: true })}/>
            <br />
            {errors.interviewDate &&
              errors.interviewDate.type === "required" && (
                <span className="error"> Interview Date is Required</span>
              )}

            <input
              type="text"
              name="finalStatus"
              placeholder="Final Status"
              className="form-control"
              {...register("finalStatus", { maxLength: 20 })}/>
            <br />
            {errors.finalStatus && errors.finalStatus.type === "required" && (
              <span className="error"> Final Status is Required</span>
            )}
            {errors.finalStatus && errors.finalStatus.type === "maxLength" && (
              <span className="error">
                Final Status must not contain more than 20 charcters
              </span>
            )}

            <br></br>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SaveInterview;
