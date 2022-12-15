import { Route, useNavigate } from "react-router-dom"
import HrHeader from "../Hr/HrHeader"
import AdminHeader from "./AdminHeader"

function Header(){

    const history= useNavigate();


    if ( sessionStorage.getItem('role') == null || sessionStorage.getItem('role') == undefined) {
        sessionStorage.setItem('role',null)
        history('/')
      }
      else{
         <Route path="/HrHeader" element= {<HrHeader />}></Route>
         history('/HrHeader')
      }

    
 
}
export default Header;