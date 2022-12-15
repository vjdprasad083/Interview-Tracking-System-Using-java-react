import axios from "axios"
const showUrl="http://localhost:8080/api/v1/admins";
const logUrl="http://localhost:8080/api/v1/login"

class AdminService{

    getAdmin(adminId){
        return axios.get(showUrl+'/'+adminId);
    }

    addAdmin(employeeId,admin){
        return axios.post(showUrl+'/'+employeeId,admin);
    }
    updatePassword(adminId,admin){
        return axios.put(showUrl+'/'+adminId,admin)
    }
    Login(id,password){
        return axios.post(logUrl,id,password);
    }
}
export default new AdminService();