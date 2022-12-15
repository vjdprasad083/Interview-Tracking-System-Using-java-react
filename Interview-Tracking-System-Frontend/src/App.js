import './App.css';
import './Stylings/Home.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowCandidates from './Candidate/ShowCandidates';
import SaveCandidate from './Candidate/SaveCandidate';
import SavePanelMember from './PanelMember/SavePanelMember';
import SaveEmployee from './Employee/SaveEmployee';
import ShowPanelMembers from './PanelMember/ShowPanelMembers';
import ShowEmployees from './Employee/ShowEmployee';
import AddInterview from './InterviewSchedule/AddInterview';
import EditCandidate from './Candidate/EditCandidate';
import ShowInterviews from './InterviewSchedule/ShowInterviews';
import EditEmployee from './Employee/EditEmployee';
import EditInterview from './InterviewSchedule/EditInterview';
import EditPanelMember from './PanelMember/EditPanelMember';
import SaveAdmin from './Admin/SaveAdmin';
import UpdatePassword from './Admin/UpdatePassword';
import AdminHeader from './Component/AdminHeader';
import HrHeader from './Hr/HrHeader';
import TechHeader from './Tech/TechHeader';
import HrInterviews from './Hr/HrInterviews';
import InterviewCandidates from './Hr/InterviewCandidates';
import GiveHrRating from './Hr/GiveHrRating';
import TechInterviews from './Tech/TechInterviews';
import TechInterviewCandidates from './Tech/InterviewCandidates';
import GiveTechRating from './Tech/GiveTechRating';
import Login from './Component/Login';
import Home from './Component/Home';
import Help from './Component/Help';
import Contact from './Component/Contact';

function App() {
  return (
    <div >
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path="/AdminHeader" element= {<AdminHeader />}></Route>
          <Route path="/HrHeader" element= {<HrHeader />}></Route>
          <Route path="/TechHeader" element= {<TechHeader />}></Route>
          <Route path="/Help" element= {<Help />}></Route>
          <Route path="/Contact" element= {<Contact/>}></Route>
          <Route path="/ShowCandidates" element= {<ShowCandidates />}></Route>
          <Route path="/ShowCandidates" element= {<ShowCandidates />}></Route>
          <Route path="/SaveCandidate"  element={<SaveCandidate />}></Route>
          <Route path="/SavePanelMember"  element={<SavePanelMember />}></Route>
          <Route path="/ShowPanelMembers"  element={<ShowPanelMembers />}></Route>
          <Route path="/SaveEmployee"  element={<SaveEmployee />}></Route>
          <Route path="/ShowEmployees"  element={<ShowEmployees />}></Route>
          <Route path="/AddInterview"  element={<AddInterview/>}></Route>
          <Route path="/EditCandidate/:id"  element={<EditCandidate />}></Route>
          <Route path="/ShowInterviews"  element={<ShowInterviews />}></Route>
          <Route path="/EditEmployee/:id"  element={<EditEmployee />}></Route>
          <Route path="/EditInterview/:id"  element={<EditInterview />}></Route>
          <Route path="/EditPanelMember/:id"  element={<EditPanelMember/>}></Route>
          <Route path="/SaveAdmin"  element={<SaveAdmin/>}></Route>
          <Route path="/UpdatePassword"  element={<UpdatePassword />}></Route>
          <Route path="/HrInterviews"  element={<HrInterviews />}></Route>
          <Route path="/InterviewCandidates"  element={<InterviewCandidates />}></Route>
          <Route path="/GiveHrRating/:interviewId"  element={<GiveHrRating />}></Route>
          <Route path="/TechInterviews"  element={<TechInterviews />}></Route>
          <Route path="/TechInterviewCandidates"  element={<TechInterviewCandidates />}></Route>
          <Route path="/GiveTechRating/:interviewId"  element={<GiveTechRating />}></Route>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}
export default App;
