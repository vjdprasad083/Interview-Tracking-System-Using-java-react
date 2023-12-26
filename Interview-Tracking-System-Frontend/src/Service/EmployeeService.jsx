import axios from "axios";
const showUrl = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(showUrl);
  }

  getEmployeeById(employeeId) {
    return axios.get(showUrl + "/" + employeeId);
  }
  addEmployee(employee) {
    return axios.post(showUrl, employee);
  }
  deleteEmployee(employeeId) {
    return axios.delete(showUrl + "/" + employeeId);
  }
  updateEmployee(employeeId, employee) {
    return axios.put(showUrl + "/" + employeeId, employee);
  }
}
export default new EmployeeService();
