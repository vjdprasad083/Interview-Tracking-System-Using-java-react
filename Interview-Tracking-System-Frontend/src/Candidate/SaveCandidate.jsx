import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import CandidateService from '../Service/CandidateService';


function SaveCandidate(){

    const history = useNavigate();
 
    const {register, handleSubmit, formState: { errors}} = useForm();
 
    const saveCandidate = data => {
        CandidateService.addCandidate(data).then(response =>{
            alert("Added successfully");
            history('/ShowCandidates')
        })
        
    }
 
    return (
        <div><AdminHeader/>
        <div  className="addCandidate">
            <div className="addCandidate-form">
               <form onSubmit={handleSubmit(saveCandidate)}>
                <input type="text" name="candidateName" placeholder="Candidate Name" className="form-control"
                 {...register("candidateName", {required:true, maxLength:20})}/>
                {errors.candidateName && errors.candidateName.type === 'required' && <span className='error'> Candidate Name is Required</span>}
                {errors.candidateName && errors.candidateName.type === 'maxLength' && <span className='error'>Candidate Name must not contain more than 20 charcters</span>}
                
                <input type="text" name="primarySkills" placeholder="Primary Skills" className="form-control"
                {...register("primarySkills", {required:true, maxLength:10})}/>
                {errors.primarySkills && errors.primarySkills.type === 'required' && <span className='error'>Primary Skills are Required</span>}
                {errors.primarySkills && errors.primarySkills.type === 'maxLength' && <span className='error'>Primary Skills must not contain more than 10 charcters</span>}
              
                <input type="text" name="secondarySkills" placeholder="Secondary Skills" className="form-control"
                {...register("secondarySkills", {required:true, maxLength:10})}/>
                {errors.secondarySkills && errors.secondarySkills.type === 'required' && <span className='error'>Secondary Skills are Required</span>}
                {errors.secondarySkills && errors.secondarySkills.type === 'maxLength' && <span className='error'>Secondary Skills must not contain more than 10 charcters</span>}
              
                <input type="text" name="experience" placeholder="Experience" className="form-control"
                {...register("experience", {required:true,valueAsNumber:true})}/>
                {errors.experience && errors.experience.type === 'required' && <span className='error'>Experience is Required</span>}
                {/* {errors.experience && errors.experience.type === 'valueAsNumber' && <span className='error'>Experience must contain numbers only</span>} */}
              
                
                <input type="text" name="qualification" placeholder="Qualification" className="form-control"
                {...register("qualification", {required:true, maxLength:10})}/>
                {errors.qualification && errors.qualification.type === 'required' && <span className='error'>Qualification is Required</span>}
                {errors.qualification && errors.qualification.type === 'maxLength' && <span className='error'>Qualification  must not contain more than 10 charcters</span>}

                <input type="text" name="designation" placeholder="Designation" className="form-control"
                {...register("designation", {required:true, maxLength:10})}/>
                {errors.designation && errors.designation.type === 'required' && <span className='error'>Designation is Required</span>}
                {errors.designation && errors.designation.type === 'maxLength' && <span className='error'>Designation  must not contain more than 10 charcters</span>}

                <input type="text" name="noticePeriod" placeholder="Notice Period" className="form-control"
                {...register("noticePeriod", {required:true, valueAsNumber:true})}/>
                {errors.noticePeriod && errors.noticePeriod.type === 'required' && <span className='error'>Notice Period is Required</span>}
                {/* {errors.noticePeriod && errors.noticePeriod.type === 'valueAsNumber' && <span className='error'>Notice Period must contain numbers only</span>} */}

                <input type="text" name="location" placeholder="Location" className="form-control"
                {...register("location", {required:true, maxLength:10})}/>
                {errors.location && errors.location.type === 'required' && <span className='error'>Location is Required</span>}
                {errors.location && errors.location.type === 'maxLength' && <span className='error'>Location  must not contain more than 10 charcters</span>}
                <br></br><button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default SaveCandidate;