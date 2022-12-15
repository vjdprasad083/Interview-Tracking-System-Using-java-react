import React from "react";
import CandidateService from "../Service/CandidateService";
import {Link} from "react-router-dom";
import AdminHeader from "../Component/AdminHeader";

class ShowCandidates extends React.Component {
 
  
    constructor(props){
        super(props);
        this.state = { candidates: [] }
     }

     componentDidMount(){
        CandidateService.getCandidates().then(response =>{
            this.setState({
                candidates:response.data
            })
        })  
    }
   
    render(){   
        const deleteCandidate=(id)=>{
            CandidateService.deleteCandidate(id).then(response =>{
                alert("deleted successfully");
                CandidateService.getCandidates().then(response =>{
                    this.setState({
                        candidates:response.data
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
                                <th>Id</th>
                                <th>Name</th>
                                <th>Primary Skills</th>
                                <th>Secondary Skills</th>
                                <th>Experience</th>
                                <th>Qualification</th>
                                <th>Designation</th>
                                <th>Notice Period</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>                            
                        </thead>
                        <tbody align="center">
                            {
                                this.state.candidates.map( candidate => (
                                    <tr key={candidate.candidateId}>
                                        <td>{candidate.candidateId}</td>
                                        <td>{candidate.candidateName}  </td>
                                        <td>{candidate.primarySkills}</td>
                                        <td>{candidate.secondarySkills}</td>
                                        <td>{candidate.experience}</td>
                                        <td>{candidate.qualification}</td>
                                        <td>{candidate.designation}</td>
                                        <td>{candidate.noticePeriod}</td>
                                        <td>{candidate.location}</td>
                                        <td><Link className="btn btn-primary" to={`/EditCandidate/${candidate.candidateId}`}>Edit</Link>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=>deleteCandidate(candidate.candidateId)}>DELETE</button></td>

                                        
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

export default ShowCandidates;
