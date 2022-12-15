// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import Adminservice from "../Service/Adminservice";

// function MyLogin(){


//     const history= useNavigate();

//     const venky="venky";

//     const {register, handleSubmit} = useForm();

//     const[userData,setUserData]=useState({
//         Id:'',
//         password:''
//     }
//     );

//     const{userId,pass}=userData;


  
//         // if (userData) {
//         //     console.log(userData)
//         //   if (userData.password !== pass) {
//         //   } else {
            
//         //       sessionStorage.setItem('id',userData.id)
//         //       alert('Login Successfull ')
//         //       history('/')
//         //     }
//         // }
        
        
//     return(
        
//         <div className="center" link>
//             <h1>Login</h1>
//             <form >
//             <input type="text" id="Id" value={userId}  name="Id" placeholder="User Id"  className="form-control"
//                 {...register("Id")}/><br />

//                  <input type="password" value={pass} id="Password" name="password" placeholder="Password"  className="form-control"
//                 {...register("password")}/><br />

//                 <a href="#" id="password" >Forgot Password?</a>
//                 <a href="#" id="signup ">Sign up</a>
//                 <button id="login" >Login</button><br /><br />
//             </form>
//         </div>        
//     )
// }
// export default MyLogin;