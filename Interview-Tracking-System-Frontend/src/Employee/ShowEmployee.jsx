import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import EmployeeService from "../Service/EmployeeService";
import EditEmployee from "./EditEmployee";
import SavePanelMember from "../PanelMember/SavePanelMember";

class ShowEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Employees: [] };
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((response) => {
      this.setState({
        Employees: response.data,
      });
    });
  }
  render() {
    const deleteEmployee = (id) => {
      EmployeeService.deleteEmployee(id).then((response) => {
        alert("deleted successfully");
        EmployeeService.getEmployees().then((response) => {
          this.setState({
            Employees: response.data,
          });
        });
      });
    };

    return (
      <div>
        {/* <AdminHeader /> */}
        <div align="container-fluid" className="students">
          <table className="table table-striped students-table">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Employees.map((Employee) => (
                <tr key={Employee.employeeId}>
                  <td>{Employee.employeeId}</td>
                  <td>{Employee.employeeName} </td>
                  <td>{Employee.employeeEmail} </td>
                  <td>{Employee.role} </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={()=> this.props.onComponentChange(<EditEmployee onComponentChange={this.props.onComponentChange} id ={Employee.employeeId} />) }>
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEmployee(Employee.employeeId)}>
                      DELETE
                    </button>
                    &nbsp;
                    <Link
                      className="btn btn-success"
                      onClick={()=> this.props.onComponentChange(<SavePanelMember  onComponentChange={this.props.onComponentChange} id ={Employee.employeeId} />) }>
                      Assign Role
                    </Link>
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

export default ShowEmployees;
