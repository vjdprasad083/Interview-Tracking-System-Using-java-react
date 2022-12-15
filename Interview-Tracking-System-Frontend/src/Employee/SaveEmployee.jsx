import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import EmployeeService from '../Service/EmployeeService';

function SaveEmployee(){

    const history = useNavigate();
 
    const {register, handleSubmit, formState: { errors}} = useForm();
 
    const SaveEmployee = data => {
        EmployeeService.addEmployee(data).then(response =>{
            alert("Added successfully");
            history('/ShowEmployees')
        })
        
    }
 
    return (
        <div><AdminHeader/>
       <div className="addCandidate">
            <div className="addCandidate-form">

               <form onSubmit={handleSubmit(SaveEmployee)}>
               <input type="text" name="employeeName" placeholder="Employee Name" className="form-control"
                 {...register("employeeName", {required:true, maxLength:20})}/>
                {errors.employeeName && errors.employeeName.type === 'required' && <span className='error'> Employee Name is Required</span>}
                {errors.employeeName && errors.employeeName.type === 'maxLength' && <span className='error'>Employee Name must not contain more than 20 charcters</span>}
                
               
                <br></br><button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>
        </div>
        </div>
 
    )
    }
 
export default SaveEmployee;