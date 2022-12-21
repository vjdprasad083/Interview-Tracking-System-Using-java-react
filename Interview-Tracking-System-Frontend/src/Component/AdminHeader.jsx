import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate} from "react-router-dom";
function AdminHeader() {

    const history = useNavigate();
    if (sessionStorage.getItem('role') !== 'Admin' || sessionStorage.getItem('role') == null || sessionStorage.getItem('role') == undefined) {
        sessionStorage.setItem('role',null);
        history('/')
      }

      const logout=()=>{
        sessionStorage.setItem('role',null);
        history('/');

      }

        return(
            <>
            <header  className="header " >
                <div className=" header-menu-list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>       
                <div className="header-name">
                    <h5>Interview Tracking System</h5>
                </div>
                <div className="header-tag">
                    (Admin)
                </div>
                    <nav className="header-menu"> 
                        <ul>
                            <li className="header-menu-li"><a className="active" href="/AdminHeader">Home</a></li>
                            <li className="header-menu-li"><a className="active" href="/Contact">Blog</a></li>
                            <li className="header-menu-li"><a className="active" href="/Help">Help</a></li>
                            <li className="header-menu-li"><a className="active" href="/Contact">Contact us</a></li>
                            <li className="header-menu-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <ul className="profile-menu">
                                    <li><a href="#">My Profile</a></li>
                                    <li><a href="#">Edit Profile</a></li>
                                    <li><a href="/UpdatePassword">Change password</a></li>
                                    <li><a href="/SaveAdmin">Add Admin</a></li>
                                    <li><a href="/Help">Help</a></li>
                                    <li><a onClick={logout}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>    
            </header>
            <div className="admin-menu">
                <nav >
                    <ul>
                        <li><a href="/ShowCandidates">Candidate</a>
                            <ul className="inside-menu">
                                <li><a href="/SaveCandidate">Add Candidate</a></li>
                                <li><a href="/ShowCandidates">View Candidate</a></li>
                                <li><a href="/ShowCandidates">Delete Candidate</a></li>
                                <li><a href="/ShowCandidates">Update Candidate</a></li>
                            </ul>
                        </li>
                        <li><a href="/ShowEmployees">Employee</a>
                            <ul className="inside-menu">
                                <li><a href="/SaveEmployee">Add Employee</a></li>
                                <li><a href="/ShowEmployees">View Employee</a></li>
                                <li><a href="/ShowEmployees">Delete Employee</a></li>
                                <li><a href="/ShowEmployees">Update Employee</a></li>
                            </ul></li>
                        <li><a href="/ShowPanelMembers">Panel Member</a>
                            <ul className="inside-menu">
                                <li><a href="/ShowEmployees">Add Panel Member</a></li>
                                <li><a href="/ShowPanelMembers">View Panel Member</a></li>
                                <li><a href="/ShowPanelMembers">Delete Panel Member</a></li>
                                <li><a href="/ShowPanelMembers">Update Panel Member</a></li>
                            </ul></li>
                        <li><a href="/ShowInterviews">Interviews</a>
                            <ul className="inside-menu">
                                <li><a href="/ShowCandidates">Add Interviews</a></li>
                                <li><a href="/ShowInterviews">View Interviews</a></li>
                                <li><a href="/ShowInterviews">Delete Interviews</a></li>
                                <li><a href="/ShowInterviews">Update Interviews</a></li>
                            </ul>
                        </li>
                    </ul> 
                </nav>
            </div>
         </>
            
        )   
    }
export default AdminHeader;