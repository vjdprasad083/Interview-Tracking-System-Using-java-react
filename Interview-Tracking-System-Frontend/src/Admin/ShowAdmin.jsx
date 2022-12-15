import React from "react";
import AdminHeader from "../Component/AdminHeader";
import AdminService from "../Service/Adminservice";

class ShowAdmins extends React.Component {

    constructor(props){
        super(props);
        this.state = { Admins: [] }
     }

     componentDidMount(){
        AdminService.getAdmins ().then(response =>{
            this.setState({
                Admins:response.data
            })
        })
    }
    render(){
        
        return(
            <div><AdminHeader/>

              <div align="container-fluid" className="students" >
                    <table className="table table-striped students-table" >
                        <thead>
                            <tr>
                                <th>Admin Id</th>
                                <th>password</th>
                                
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                this.state.Admins.map( Admin => (
                                    <tr key={Admin.adminId}>

                                        <td>{Admin.password}</td>
                                        
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

export default ShowAdmins;
