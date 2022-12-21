import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import EmployeeService from "../Service/EmployeeService";


class ShowEmployees extends React.Component {

    constructor(props){
        super(props);
        this.state = { Employees: [] }
     }

     componentDidMount(){
        EmployeeService.getEmployees().then(response =>{
            this.setState({
                Employees:response.data
            })
        })
    }
    render(){ 
        const deleteEmployee=(id)=>{
            EmployeeService.deleteEmployee(id).then(response =>{
                alert("deleted successfully");
                EmployeeService.getEmployees().then(response =>{
                    this.setState({
                        Employees:response.data
                })  
        })
    })
}
          

        return(
            <div><AdminHeader/>
              <div align="container-fluid" className="students" >
                    <table className="table table-striped students-table" >
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Role</th>
                                <th>Actions</th>
                                
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                this.state.Employees.map( Employee => (
                                    <tr key={Employee.employeeId}>
                                        <td>{Employee.employeeId}</td>
                                        <td>{Employee.employeeName}  </td>
                                        <td>{Employee.role}  </td>
                                        <td><Link className="btn btn-primary" to={`/EditEmployee/${Employee.employeeId}`}>Edit</Link>&nbsp;
                                        <button className="btn btn-danger" onClick={()=>deleteEmployee(Employee.employeeId)}>DELETE</button>&nbsp;
                                        <Link className="btn btn-success" to={`/SavePanelMember/${Employee.employeeId}`}>Assign Role</Link></td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                </div>

        )
    }
}

export default ShowEmployees;
