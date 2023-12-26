import axios from "axios";
const showUrl = "http://localhost:8080/api/v1/interviews";

class InterviewScheduleService {
  getInterviews() {
    return axios.get(showUrl);
  }

  getInterviewById(interviewId) {
    return axios.get(showUrl + "/" + interviewId);
  }
  scheduleInterview(candidateId, panelmemberId, interview) {
    return axios.post(
      showUrl + "/" + candidateId + "/" + panelmemberId,
      interview
    );
  }
  deleteInterview(interviewId) {
    return axios.delete(showUrl + "/" + interviewId);
  }
  updateInterview(interviewId, panelMemberId, candidateId, interview) {
    return axios.put(
      showUrl + "/" + interviewId + "/" + panelMemberId + "/" + candidateId,
      interview
    );
  }
}
export default new InterviewScheduleService();
