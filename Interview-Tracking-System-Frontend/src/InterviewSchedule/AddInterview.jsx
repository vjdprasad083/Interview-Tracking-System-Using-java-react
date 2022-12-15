import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import InterviewScheduleService from '../Service/InterviewScheduleService';

function SaveInterview(){

    const history= useNavigate();
 
    const {register, handleSubmit, formState: { errors}} = useForm();
 
    const addInterview = data => {
        InterviewScheduleService.scheduleInterview(data.candidate,data.panelMember,data).then(response =>{
            alert("Added successfully");
            history('/ShowInterviews')
        })
        
    }
 
    return (
        <div><AdminHeader/>
       <div className="addCandidate">
            <div className="addCandidate-form">

               <form onSubmit={handleSubmit(addInterview)}>
               <input type="text" name="candidate" placeholder="Candidate Id" className="form-control"
                 {...register("candidate", {required:true, maxLength:20})}/><br />
                {errors.candidate && errors.candidate.type === 'required' && <span className='error'> Candidate Id  is Required</span>}
                {errors.candidate && errors.candidate.type === 'maxLength' && <span className='error'>Candidate Id  must not contain more than 20 charcters</span>}

                <input type="text" name="panelMember" placeholder="panelmember Id" className="form-control"
                 {...register("panelMember", {required:true, maxLength:20})}/><br />
                {errors.panelMember && errors.panelMember.type === 'required' && <span className='error'> panelmember Id  is Required</span>}
                {errors.panelMember && errors.panelMember.type === 'maxLength' && <span className='error'>panelmember Id  must not contain more than 20 charcters</span>}

                <input type="Date" name="interviewDate" placeholder="Interview Date" className="form-control"
                 {...register("interviewDate", {required:true})}/><br />
              

                <input type="text" name="finalStatus" placeholder="Final Status" className="form-control"
                 {...register("finalStatus", {required:true, maxLength:20})}/><br />
                {errors.finalStatus && errors.finalStatus.type === 'required' && <span className='error'> Final Status is Required</span>}
                {errors.finalStatus && errors.finalStatus.type === 'maxLength' && <span className='error'>Final Status must not contain more than 20 charcters</span>}
                
               
                <br></br><button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default SaveInterview;