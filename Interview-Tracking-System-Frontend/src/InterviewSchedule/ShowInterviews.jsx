import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";
import interviewScheduleService from "../Service/InterviewScheduleService";

class ShowInterviews extends React.Component {
 

    constructor(props){
        super(props);
        this.state = { interviews: [] }
     }

     componentDidMount(){
        interviewScheduleService.getInterviews().then(response =>{
            this.setState({
                interviews:response.data
            })
        })  
    }
   
    render(){   
        const deleteInterview=(id)=>{
            interviewScheduleService.deleteInterview(id).then(response =>{
                alert("deleted successfully");
                interviewScheduleService.getInterviews().then(response =>{
                    this.setState({
                        interviews:response.data
                    })
                }) 
               
        })
    }

        return(
            <div><AdminHeader/>
             
            <div align="container-fluid" className="students" >
                <table className="table table-striped students-table " >
                    <thead align="center">
                        <tr>
                            <th>interviewDate</th>
                            <th>Candidate Name</th>
                            <th>techRating</th>
                            <th>hrRating</th>
                            <th>Panelmember Name</th>
                            <th>finalStatus</th>
                            <th>Actions</th>
                        </tr>                            
                    </thead>
                    <tbody align="center">
                        {
                            this.state.interviews.map( interview => (
                                <tr key={interview.interviewSchduleId}>

                                
                                    <td>{interview.interviewDate}</td>
                                    <td>{interview.candidate.candidateName}</td>
                                    <td>{interview.techRating}</td>
                                    <td>{interview.hrRating}</td>
                                    <td>{interview.panelMember.employee.employeeName}</td>
                                    <td>{interview.finalStatus}</td>

                                    
                                    <td><Link className="btn btn-primary" to={`/EditInterview/${interview.interviewSchduleId}`}>Edit</Link>                                   
                                     &nbsp;
                                    <button className="btn btn-danger" onClick={()=>deleteInterview(interview.interviewSchduleId)}>DELETE</button></td>

                                    
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

export default ShowInterviews;
