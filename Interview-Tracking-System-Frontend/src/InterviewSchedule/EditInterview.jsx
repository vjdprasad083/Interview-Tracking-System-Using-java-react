import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import InterviewScheduleService from '../Service/InterviewScheduleService';
import PanelMemberService from '../Service/PanelMemberService';

function EditInterview(){

    const history= useNavigate();

    const {register, handleSubmit,formState: { errors}} = useForm();

    const{id}=useParams();

    const [panelMembers,setPanelMembers]=useState([]);



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

   useEffect(()=>{

    const getEmployee=async()=>{
        PanelMemberService.getPanelMembers().then(response =>{
            setPanelMembers(response.data);
        })
    }
    getEmployee(); 
},[]);

   const handleChange = (e) => {
    setInterviews({ ...interviews, [e.target.placeholder]: e.target.value });
 }
 
 
    const editInterview = interview => {
        console.log(interviews)
        InterviewScheduleService.updateInterview(id,interview.panelMember,interviews.candidate.candidateId,interview).then(response =>{
            alert("Updated successfully");
            history('/ShowInterviews')
        })
        
    }
 
    return (
        <div><AdminHeader/>
 
       <div className="addCandidate">
            <div className="addCandidate-form">

               <form onSubmit={handleSubmit(editInterview)}>

              


               <input type="text" name="candidate" placeholder="Candidate Id" value={interviews.candidate.candidateName} onChange={handleChange}  className="form-control"
                 {...register("candidate")}  /><br />

                <select name="panelMember" className="form-control" {...register("panelMember", {required:true})}>
                    <option>--Select Interviewer--</option>
                        {
                            panelMembers.map((panel)=>(
                                <option key={panel.panelMemberId} value={panel.panelMemberId}>{panel.employee.employeeName}</option>    
                            ) ) 
                        }
                </select><br></br>

                <input type="Date" name="interviewDate" placeholder="Interview Date"  onChange={(e) => handleChange(e)} className="form-control"
                 {...register("interviewDate",{required:true})}/><br />
                 {errors.interviewDate && errors.interviewDate.type === 'required' && <span className='error'> Interview Date  is Required</span>}

              

                <input type="text" name="finalStatus" placeholder="Final Status"   onChange={(e) => handleChange(e)} className="form-control"
                 {...register("finalStatus",{required:true})}/><br />
                {errors.finalStatus && errors.finalStatus.type === 'required' && <span className='error'> Final Status  is Required</span>}

                
               
                <br></br><button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default EditInterview;