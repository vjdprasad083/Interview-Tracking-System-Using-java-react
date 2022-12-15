import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import PanelMemberService from "../Service/PanelMemberService";

class ShowPanelMembers extends React.Component {

    constructor(props){
        super(props);
        this.state = { panelMembers: [] }
     }

     componentDidMount(){
        PanelMemberService.getPanelMembers().then(response =>{
            this.setState({
                panelMembers:response.data
            })
            
        })
    }
    render(){ 
        const deletePanelMember=(id)=>{
            PanelMemberService.deletePanelMembers(id).then(response =>{
                alert("deleted successfully");
                PanelMemberService.getPanelMembers().then(response =>{
                    this.setState({
                        panelMembers:response.data
                    })
                })  
        })  
    }     

        return(
            <div><AdminHeader/>
              <div align="container-fluid" className="students" >
                    <table className="table table-striped students-table" >
                        <thead>
                            <tr>
                                <th>PanelMember Id</th>
                                <th>Employee Name</th>
                                <th>Password</th>
                                <th>PanelMember Type</th>
                                <th>location</th>                                
                                <th>Actions</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                this.state.panelMembers.map( panelMember => (
                                    <tr key={panelMember.panelMemberId}>
                                        <td>{panelMember.panelMemberId}</td>
                                        <td>{panelMember.employee.employeeName}</td>
                                        <td>{panelMember.password}</td>
                                        <td>{panelMember.panelMemberType}  </td>
                                        <td>{panelMember.location}</td>
                                        
                                        <td><Link className="btn btn-primary" to={`/EditPanelmember/${panelMember.panelMemberId}`}>Edit</Link>                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=>deletePanelMember(panelMember.panelMemberId)}>DELETE</button></td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                </div>

        )
    }
}

export default ShowPanelMembers;
