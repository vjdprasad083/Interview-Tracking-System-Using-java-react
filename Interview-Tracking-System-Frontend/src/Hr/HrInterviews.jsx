import React from "react";
import { Link } from "react-router-dom";
import HrService from "../Service/HrService";
import HrHeader from "./HrHeader";
class HrInterviews extends React.Component {
 

    constructor(props){
        super(props);
        this.state = { interviews: [] }
     }

     componentDidMount(){
        HrService.getInterviews().then(response =>{
            this.setState({
                interviews:response.data
            })
        })  
    }
   
    render(){   

        return(
            <div><HrHeader />
             
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
                                    
                                    <td><Link className="btn btn-success" to={`/GiveHrRating/${interview.interviewSchduleId}`}>Give Rating</Link></td>                                  
                                    

                                    
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

export default HrInterviews;
