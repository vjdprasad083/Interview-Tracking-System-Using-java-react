import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import TechService from "../Service/TechService";
import TechHeader from "./TechHeader";
function GiveTechRating() {
  const history = useNavigate();

  const { interviewId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const giveHrRating = (data) => {
    TechService.giveRating(data.interview, data.rating).then((response) => {
      alert("Rated successfully");
      history("/TechInterviews");
    });
  };

  return (
    <div>
      <TechHeader />
      <div className="addCandidate">
        <div className="addCandidate-form">
          <form onSubmit={handleSubmit(giveHrRating)}>
            <input
              type="text"
              name="interview"
              placeholder="Interview Id"
              value={interviewId}
              className="form-control"
              {...register("interview")}/>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="form-control"
              {...register("rating", { required: true, maxLength: 20 })}/>
            {errors.rating && errors.rating.type === "required" && (
              <span className="error"> Rating is Required</span>
            )}
            {errors.rating && errors.rating.type === "maxLength" && (
              <span className="error">
                Rating must not contain more than 2 charcters
              </span>
            )}

            <br></br>
            <button type="submit" className="btn btn-primary">
              Rate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GiveTechRating;
