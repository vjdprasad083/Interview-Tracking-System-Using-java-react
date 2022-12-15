import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import PanelMemberService from '../Service/PanelMemberService';

function SavePanelMember(){

    const history= useNavigate();
 
    const {register, handleSubmit, formState: {errors}} = useForm();
 
    const SavePanelMember = data => {
        PanelMemberService.addPanelMembers(data.employeeId,data).then(response =>{
            alert("Added successfully");
            history('/ShowPanelMembers')
        })
        
    }
 
    return (
        <div><AdminHeader/>
 
        <div  className="addCandidate">
        <div className="addCandidate-form">
            
               <form onSubmit={handleSubmit(SavePanelMember)}>
                <input type="text" name="Employee Id" placeholder="Employee Id" className="form-control"
                {...register("employeeId", {required:true})}/>
                {errors.employeeId && errors.employeeId.type === 'required' && <span className='error'>Employee Id is Required</span>}
               

                <input type="text" name="password" placeholder="Password" className="form-control"
                {...register("password", {required:true, maxLength:10})}/>
                {errors.password && errors.password.type === 'required' && <span className='error'>Password is Required</span>}
                {errors.password && errors.password.type === 'maxLength' && <span className='error'>Password must not contain more than 10 charcters</span>}


                <input type="text" name="panelMemberType" placeholder="PanelMemberType" className="form-control"
                {...register("panelMemberType", {required:true, maxLength:10})}/>
                {errors.panelMemberType && errors.panelMemberType.type === 'required' && <span className='error'>PanelMemberType is Required</span>}
                {errors.panelMemberType && errors.panelMemberType.type === 'maxLength' && <span className='error'>PanelMemberType must not contain more than 10 charcters</span>}

                <input type="text" name="location" placeholder="Location" className="form-control"
                {...register("location", {required:true, maxLength:20})}/>
                {errors.location && errors.location.type === 'required' && <span className='error'>Location is Required</span>}
                {errors.location && errors.location.type === 'maxLength' && <span className='error'>Location  must not contain more than 10 charcters</span>}
                <br></br><button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default SavePanelMember;