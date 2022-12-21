import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AdminHeader from '../Component/AdminHeader';
import PanelMemberService from '../Service/PanelMemberService';

function EditPanelMember(){

    const history= useNavigate();


    const{id}=useParams();

    const [panelMember, setPanelMember] = useState({ 
        panelMemberId: '', 
        password:'',
        employee: '', 
        panelMemberType:'',
        location:''
     })

     useEffect(() => {
        if (id) {
            getpanelMemberById(id)
        }
     })

      const getpanelMemberById = async (id) => {
      let panelMember= await (await PanelMemberService.getPanelMemberById(id)).data;
      setPanelMember(panelMember)
   }

   const handleChange = (e) => {
    setPanelMember({ ...panelMember, [e.target.placeholder]: e.target.value });
 }
 
    const {register, handleSubmit} = useForm();
    const editPanelMember = panelMembers => {
        PanelMemberService.updatePanelMember(panelMember.panelMemberId,panelMembers.employeeId,panelMembers).then(response =>{
            alert("Updated successfully");
            history('/ShowPanelMembers')
        })
        
    }
 
    return (

        <div><AdminHeader/>
 
        <div  className="addCandidate">
        <div className="addCandidate-form">

             <form onSubmit={handleSubmit(editPanelMember)}>
                <input type="text" name="panelMemberId" placeholder="Employee Name" value={panelMember.employee.employeeName} onChange={handleChange} className="form-control"
                {...register("panelMemberId")}/>

                <input type="text" name="password" placeholder="Password" value={panelMember.password} onChange={handleChange} className="form-control"
                {...register("password")}/>
            
                <input type="text" name="employeeId" placeholder="Employee Id" value={panelMember.employee.employeeId} onChange={handleChange} className="form-control"
                {...register("employeeId")}/>
               

                <input type="text" name="panelMemberType" placeholder="PanelMemberType" defaultValue={panelMember.panelMemberType} onChange={(e) => handleChange(e)} className="form-control"
                {...register("panelMemberType")}/>

                <input type="text" name="location" placeholder="Location" defaultValue={panelMember.location} onChange={(e) => handleChange(e)} className="form-control"
                {...register("location")}/>
                <br></br><button type="submit" className="btn btn-primary">Update</button>
            </form>
            </div>
        </div>

        </div>
 
    )
    }
 
export default EditPanelMember;