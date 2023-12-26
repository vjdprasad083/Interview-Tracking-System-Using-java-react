import axios from "axios";
const showUrl = "http://localhost:8080/api/v1/panelMembers";

class PanelMemberService {
  getPanelMembers() {
    return axios.get(showUrl);
  }

  getPanelMemberById(panelMemberId) {
    return axios.get(showUrl + "/" + panelMemberId);
  }
  getPanelMemberByEmail(email) {
    return axios.get(showUrl + "/email/" + email);
  }

  addPanelMembers(employeeId, panelMember) {
    console.log(panelMember, employeeId);
    return axios.post(showUrl + "/" + employeeId, panelMember);
  }
  deletePanelMembers(panelMemberId) {
    return axios.delete(showUrl + "/" + panelMemberId);
  }
  updatePanelMember(panelMemberId, employeeId, panelMember) {
    return axios.put(
      showUrl + "/" + panelMemberId + "/" + employeeId,
      panelMember
    );
  }
}
export default new PanelMemberService();
