import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import CandidateService from '../Service/CandidateService';


function EditCandidate(){
    const history = useNavigate();

    const {register,handleSubmit} = useForm();
    const {id} = useParams();

    const [candidate,setCandidate]=useState({

        candidateId: '', 
        candidateName: '', 
        primarySkills: '', 
        secondarySkills: '', 
        experience: '', 
        qualification: '', 
        designation: '', 
        noticePeriod: '', 
        location: ''

    })

    useEffect(() => {
        if (id) {
           getCandidateById(id)
        }
     })

     const getCandidateById = async (id) => {
        let candidate = await (await CandidateService.getCandidateById(id)).data;
        setCandidate(candidate)
     }

     const handleChange = (e) => {
        setCandidate({ ...candidate, [e.target.placeholder]: e.target.value });
     }
 
    
     const editCandidate =candidate => {
        CandidateService.updateCandidate(id,candidate).then(response =>{
            alert("Updated successfully");
            history('/ShowCandidates')
        })
    }
        
        
    

 
    return (
        <div><AdminHeader/>
        <div  className="addCandidate">
            <div className="addCandidate-form">
               <form onSubmit={handleSubmit(editCandidate)}>

                <input type="text" name="candidateName" placeholder="Candidate Name" defaultValue={candidate.candidateName} onChange={(e) => handleChange(e)} className="form-control"
                 {...register("candidateName")}/>
                
                <input type="text" name="primarySkills" placeholder="Primary Skills" defaultValue={candidate.primarySkills} onChange={(e) => handleChange(e)} className="form-control"
                {...register("primarySkills")}/>
              
                <input type="text" name="secondarySkills" placeholder="Secondary Skills" defaultValue={candidate.secondarySkills} onChange={(e) => handleChange(e)} className="form-control"
                {...register("secondarySkills")}/>
              
                <input type="text" name="experience" placeholder="Experience" defaultValue={candidate.experience} onChange={(e) => handleChange(e)} className="form-control"
                {...register("experience")}/>
              
                
                <input type="text" name="qualification" placeholder="Qualification" defaultValue={candidate.qualification} onChange={(e) => handleChange(e)} className="form-control"
                {...register("qualification")}/>

                <input type="text" name="designation" placeholder="Designation" defaultValue={candidate.designation} onChange={(e) => handleChange(e)} className="form-control"
                {...register("designation")}/>

                <input type="text" name="noticePeriod" placeholder="Notice Period" defaultValue={candidate.noticePeriod} onChange={(e) => handleChange(e)} className="form-control"
                {...register("noticePeriod")}/>

                <input type="text" name="location" placeholder="Location" defaultValue={candidate.location} onChange={(e) => handleChange(e)} className="form-control"
                {...register("location")}/>
                <br></br><button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default EditCandidate;