import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import EmployeeService from "../Service/EmployeeService";
import ShowEmployees from "../Employee/ShowEmployee";

function SaveEmployee(props) {
  const history = useNavigate();
  const {onComponentChange} = props;  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SaveEmployee = (data) => {
    EmployeeService.addEmployee(data).then((response) => {
      alert("Added successfully");
      // history("/ShowEmployees");
      onComponentChange(<ShowEmployees  onComponentChange = {onComponentChange} />)

    });
  };

  return (
    <div>
      {/* <AdminHeader /> */}
      <div className="addCandidate">
        <div className="addCandidate-form">
          <form onSubmit={handleSubmit(SaveEmployee)}>
            <input
              type="text"
              name="employeeName"
              placeholder="Employee Name"
              className="form-control"
              {...register("employeeName", { required: true, maxLength: 20 })}/>
            {errors.employeeName && errors.employeeName.type === "required" && (
              <span className="error"> Employee Name is Required</span>
            )}
            {errors.employeeName && errors.employeeName.type === "maxLength" && (
                <span className="error"> Employee Name must not contain more than 20 charcters</span>
              )}
              <br />
               <input
              type="email"
              name="employeeEmail"
              placeholder="Employee Email"
              className="form-control"
              {...register("employeeEmail", { required: true, maxLength: 20 })}/>
            {errors.employeeEmail && errors.employeeEmail.type === "required" && (
              <span className="error"> Employee Email is Required</span>
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

export default SaveEmployee;
