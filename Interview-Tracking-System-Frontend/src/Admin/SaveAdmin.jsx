import { useForm } from "react-hook-form";
import AdminHeader from "../Component/AdminHeader";
import AdminService from "../Service/Adminservice";

function SaveAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveAdmin = (data) => {
    AdminService.addAdmin(data.employeeId, data).then((response) => {
      alert("Added successfully");
    });
  };

  return (
    <div>
      {/* <AdminHeader /> */}

      <div className="addCandidate">
        <div className="addCandidate-form">
          <form onSubmit={handleSubmit(saveAdmin)}>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee Id"
              className="form-control"
              {...register("employeeId", { required: true })}/>
            {errors.employeeId && errors.employeeId.type === "required" && (
              <span className="error">Employee Id is Required</span>
            )}
            <br />

            <input
              type="text"
              name="password"
              placeholder="password"
              className="form-control"
              {...register("password", { required: true, maxLength: 20 })}/>
            {errors.password && errors.password.type === "required" && (
              <span className="error"> password is Required</span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className="error">
                password must not contain more than 20 charcters
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

export default SaveAdmin;
