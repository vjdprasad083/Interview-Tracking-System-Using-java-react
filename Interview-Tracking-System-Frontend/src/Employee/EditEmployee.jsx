import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import EmployeeService from "../Service/EmployeeService";
import ShowEmployees from "../Employee/ShowEmployee";


function EditEmployee(props) {
  const history = useNavigate();

  const { id,onComponentChange } = props;

  const [employee, setEmployee] = useState({
    employeeId: "",
    employeeName: "",
    employeeEmail: "",
    employeeRole: ""  
  });

  useEffect(() => {
      getEmployeeById(id);

  },[]);

  const getEmployeeById = async (id) => {
    let employee = await (await EmployeeService.getEmployeeById(id)).data;
     setEmployee(employee);
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  

  const { register, handleSubmit } = useForm();

  const editEmployee = (employee) => {
    EmployeeService.updateEmployee(id, employee).then((response) => {
      alert("Updated successfully");
      onComponentChange(<ShowEmployees  onComponentChange = {onComponentChange} />)
      // history("/ShowEmployees");
    });
  };

  return (
    <div>
      {/* <AdminHeader /> */}
      <div className="addCandidate">
        <div className="addCandidate-form">
          <form onSubmit={handleSubmit(editEmployee)}>
            <input
              type="text"
              name="employeeName"
              placeholder="Employee Name"
              defaultValue={employee.employeeName}
              onChange={(e) => handleChange(e)}
              className="form-control"
              {...register("employeeName")}/>
              <br />

              <input
              type="text"
              name="employeeEmail"
              placeholder="Employee Email"
              defaultValue={employee.employeeEmail}
              onChange={(e) => handleChange(e)}
              className="form-control"
              {...register("employeeEmail")}/>
              <br />

            <input
              type="text"
              name="role"
              placeholder="Employee Role"
              value={employee.role}
              onChange={(e) => handleChange(e)}
              className="form-control"
              {...register("role")}/>

            <br></br>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
