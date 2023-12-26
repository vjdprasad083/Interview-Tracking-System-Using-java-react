import { useState } from "react";
import AdminHeader from "./AdminHeader";
import ShowInterviews from "../InterviewSchedule/ShowInterviews";
import EditCandidate from "../Candidate/EditCandidate";
import { Route, Routes } from "react-router";

function AdminPanel(){

const [currentComponent, setCurrentComponent] = useState(<ShowInterviews />);

  const renderComponent = (component) => {
    setCurrentComponent(component);
  };

    return(
            <div>
                <div id = "header">
                    <AdminHeader onComponentChange={renderComponent} />
                </div>
                <div id = "content">
                    {currentComponent}
                </div>
            </div>
     
    );
}
export default AdminPanel;