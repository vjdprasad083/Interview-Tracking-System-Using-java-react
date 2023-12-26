import { useForm } from "react-hook-form";
import AdminHeader from "../Component/AdminHeader";
import AdminService from "../Service/Adminservice";

function UpdatePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updatePassword = (data) => {
    AdminService.updatePassword(data.adminId, data).then((response) => {
      alert("Updated successfully");
    });
  };

  return (
    <div>
      {/* <AdminHeader /> */}

      <div className="addCandidate">
        <div className="addCandidate-form">
          <form onSubmit={handleSubmit(updatePassword)}>
            <input
              type="text"
              name="adminId"
              placeholder="Id"
              className="form-control"
              {...register("adminId", { required: true })}/>
            {errors.adminId && errors.adminId.type === "required" && (
              <span className="error"> Id is Required</span>
            )}
            <br />

            <input
              type="text"
              name="password"
              placeholder="Password"
              className="form-control"
              {...register("password", { required: true, maxLength: 20 })}/>
            {errors.password && errors.password.type === "required" && (
              <span className="error"> Password is Required</span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className="error">
                Password must not contain more than 20 charcters
              </span>
            )}

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

export default UpdatePassword;
