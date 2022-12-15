import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import InterviewScheduleService from '../Service/InterviewScheduleService';

function EditInterview(){

    const history= useNavigate();


    const{id}=useParams();

    const [interviews, setInterviews] = useState({ 
        interviewSchduleId: '', 
        candidate: '',
        panelMember:'',
        interviewDate:'',
        finalStatus:''
       
     })

     useEffect(() => {
        if (id) {
            getInterviewById(id)
        }
     })

      const getInterviewById = async (id) => {
      let interviews= await (await InterviewScheduleService.getInterviewById(id)).data;
      setInterviews(interviews)
   }

   const handleChange = (e) => {
    setInterviews({ ...interviews, [e.target.placeholder]: e.target.value });
 }
 
    const {register, handleSubmit} = useForm();
 
    const editInterview = interviews => {
        InterviewScheduleService.updateInterview(id,interviews.panelMember,interviews.candidate,interviews).then(response =>{
            alert("Updated successfully");
            history('/ShowInterviews')
        })
        
    }
 
    return (
        <div><AdminHeader/>
 
       <div className="addCandidate">
            <div className="addCandidate-form">

               <form onSubmit={handleSubmit(editInterview)}>

               <input type="text" name="interview" placeholder="Interview Id" value={interviews.interviewSchduleId} onChange={handleChange} className="form-control"
                {...register("interview")}/><br />


               <input type="text" name="candidate" placeholder="Candidate Id" value={interviews.candidate.candidateId} onChange={handleChange} className="form-control"
                 {...register("candidate")}/><br />

                <input type="text" name="panelMember" placeholder="panelmember Id" value={interviews.panelMember.panelMemberId} onChange={handleChange} className="form-control"
                 {...register("panelMember")}/><br />

                <input type="Date" name="interviewDate" placeholder="Interview Date" defaultValue={interviews.interviewDate} onChange={(e) => handleChange(e)} className="form-control"
                 {...register("interviewDate")}/><br />
              

                <input type="text" name="finalStatus" placeholder="Final Status"  defaultValue={interviews.finalStatus} onChange={(e) => handleChange(e)} className="form-control"
                 {...register("finalStatus")}/><br />
                
               
                <br></br><button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default EditInterview;