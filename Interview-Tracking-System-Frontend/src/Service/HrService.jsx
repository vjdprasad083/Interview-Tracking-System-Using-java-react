import axios from "axios";
const showUrl = "http://localhost:8080/api/v1/hr/interviews";

class HrService {
  getInterviewsById(interview) {
    return axios.get(showUrl + "/" + interview);
  }
  getInterviewCandidates(panelMemberId) {
    return axios.get(showUrl + "/candidates" + "/" + panelMemberId);
  }
  giveRating(interviewId, hrRating) {
    return axios.put(showUrl + "/" + interviewId + "/" + hrRating);
  }
}
export default new HrService();
