import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCandidates from "../Candidate/ShowCandidates";
import SaveCandidate from "../Candidate/SaveCandidate";
import ShowEmployees from "../Employee/ShowEmployee";
import SaveEmployee from "../Employee/SaveEmployee";
import ShowPanelMembers from "../PanelMember/ShowPanelMembers";
import ShowInterviews from "../InterviewSchedule/ShowInterviews";
import Contact from "./Contact";
import Help from "./Help";
import SaveAdmin from "../Admin/SaveAdmin";
import UpdatePassword from "../Admin/UpdatePassword";
function AdminHeader({ onComponentChange }) {
  const history = useNavigate();
  if (
    sessionStorage.getItem("role") !== "Admin" ||
    sessionStorage.getItem("role") == null ||
    sessionStorage.getItem("role") == undefined
  ) {
    sessionStorage.setItem("role", null);
    history("/");
  }

  const logout = () => {
    sessionStorage.setItem("role", null);
    history("/");
  };

  const handleComponentClick = (component) => {
    onComponentChange(component);
  };

  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <header className="header ">
        <div className=" header-menu-list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <div className="header-name">
          <h5>Interview Tracking System</h5>
        </div>
        <div className="header-tag">(Admin)</div>
        <nav className="header-menu">
          <ul>
            <li className="header-menu-li">
              <a className="active" href="#" onClick={() => handleComponentClick(<ShowInterviews onComponentChange = {onComponentChange} />)}>
                Home
              </a>
            </li>
            <li className="header-menu-li">
              <a className="active" href="#blog" onClick={() => handleComponentClick(<Contact />)}>
                Blog
              </a>
            </li>
            <li className="header-menu-li">
              <a className="active" href="#help" onClick={() => handleComponentClick(<Help />)}>
                Help
              </a>
            </li>
            <li className="header-menu-li">
              <a className="active" href="#contact" onClick={() => handleComponentClick(<Contact />)}>
                Contact us
              </a>
            </li>
            <li className="header-menu-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <ul className="profile-menu">
                <li>
                  <a href="#">My Profile</a>
                </li>
                <li>
                  <a href="#">Edit Profile</a>
                </li>
                <li>
                  <a href="#updatePassword" onClick={() => handleComponentClick(<UpdatePassword />)}>Change password</a>
                </li>
                <li>
                  <a href="#saveAdmin" onClick={() => handleComponentClick(<SaveAdmin />)}>Add Admin</a>
                </li>
                <li>
                  <a href="#help" onClick={() => handleComponentClick(<Help />)}>Help</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div className="admin-menu">
        <nav>
          <ul>
            <li className={selectedItem === 'candidate' ? 'selected' : ''} >
              <a href="#showCandidate" onClick={() => { handleItemClick('candidate');
               handleComponentClick(<ShowCandidates  onComponentChange = {onComponentChange} />);}}>Candidate</a>
              <ul className="inside-menu">
                <li>
                  <a href="#saveCandidate" onClick={() => { handleItemClick('candidate'); handleComponentClick(<SaveCandidate onComponentChange = {onComponentChange}/>)}}>Add Candidate</a>
                </li>
                <li>
                  <a href="#showCandidate" onClick={() => { handleItemClick('candidate'); handleComponentClick(<ShowCandidates onComponentChange = {onComponentChange}/>)}}>View Candidate</a>
                </li>
                <li>
                  <a href="#deleteCandidate" onClick={() => { handleItemClick('candidate'); handleComponentClick(<ShowCandidates onComponentChange = {onComponentChange}/>)}}>Delete Candidate</a>
                </li>
                <li>
                  <a href="#updateCandidate" onClick={() => { handleItemClick('candidate'); handleComponentClick(<ShowCandidates onComponentChange = {onComponentChange}/>)}}>Update Candidate</a>
                </li>
              </ul>
            </li>
            <li className={selectedItem === 'employee' ? 'selected' : ''}>
              <a href="#showEmployee" onClick={() => { handleItemClick('employee');
                handleComponentClick(<ShowEmployees  onComponentChange = {onComponentChange} />)}}>Employee</a>
              <ul className="inside-menu">
                <li>
                  <a href="#saveEmployee" onClick={() => { handleItemClick('employee'); handleComponentClick(<SaveEmployee onComponentChange = {onComponentChange}/>)}}>Add Employee</a>
                </li>
                <li>
                  <a href="#showEmployee" onClick={() => { handleItemClick('employee'); handleComponentClick(<ShowEmployees onComponentChange = {onComponentChange}/>)}}>View Employee</a>
                </li>
                <li>
                  <a href="#deleteEmployee" onClick={() => { handleItemClick('employee'); handleComponentClick(<ShowEmployees onComponentChange = {onComponentChange}/>)}}>Delete Employee</a>
                </li>
                <li>
                  <a href="#updateEmployee" onClick={() => { handleItemClick('employee'); handleComponentClick(<ShowEmployees onComponentChange = {onComponentChange}/>)}}>Update Employee</a>
                </li>
              </ul>
            </li>
            <li className={selectedItem === 'panel member' ? 'selected' : ''}>
              <a href="#showPanelMembers" onClick={() => { handleItemClick('panel member'); 
                handleComponentClick(<ShowPanelMembers  onComponentChange = {onComponentChange}/>)}}>Panel Member</a>
              <ul className="inside-menu">
                <li>
                  <a href="#addPanelMember" onClick={() => { handleItemClick('employee'); 
                    handleComponentClick(<ShowEmployees onComponentChange = {onComponentChange}/>)}}>Add Panel Member</a>
                </li>
                <li>
                  <a href="#showPanelMembers" onClick={() => { handleItemClick('panel member');
                   handleComponentClick(<ShowPanelMembers onComponentChange = {onComponentChange}/>)}}>View Panel Member</a>
                </li>
                <li>
                  <a href="#deletePanelMembers" onClick={() => { handleItemClick('panel member'); handleComponentClick(<ShowPanelMembers onComponentChange = {onComponentChange}/>)}}>Delete Panel Member</a>
                </li>
                <li>
                  <a href="#updatePanelMembers" onClick={() => { handleItemClick('panel member'); handleComponentClick(<ShowPanelMembers onComponentChange = {onComponentChange}/>)}}>Update Panel Member</a>
                </li>
              </ul>
            </li>
            <li className={selectedItem === 'interviews' ? 'selected' : ''}>
              <a href="#showInterviews" onClick={() => { handleItemClick('interviews'); 
                handleComponentClick(<ShowInterviews onComponentChange = {onComponentChange} />)}}>Interviews</a>
              <ul className="inside-menu">
                <li>
                  <a href="#addInterviews" onClick={() => { handleItemClick('candidate'); 
                    handleComponentClick(<ShowCandidates onComponentChange = {onComponentChange}/>)}}>Add Interviews</a>
                </li>
                <li>
                  <a href="#showInterviews" onClick={() => { handleItemClick('interviews');
                    handleComponentClick(<ShowInterviews onComponentChange = {onComponentChange} />)}}>View Interviews</a>
                </li>
                <li>
                  <a href="#deleteInterviews" onClick={() => { handleItemClick('interviews'); 
                    handleComponentClick(<ShowInterviews onComponentChange = {onComponentChange}/>)}}>Delete Interviews</a>
                </li>
                <li>
                  <a href="#updateInterviews" onClick={() => { handleItemClick('interviews');
                   handleComponentClick(<ShowInterviews onComponentChange = {onComponentChange}/>)}}>Update Interviews</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default AdminHeader;
