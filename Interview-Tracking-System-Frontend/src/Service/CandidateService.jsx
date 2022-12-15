import axios from "axios"
const showUrl="http://localhost:8080/api/v1/candidates";

class CandidateService{

    getCandidates(){
        return axios.get(showUrl);
    }
    getCandidateById(candidateId){
        return axios.get(showUrl+'/'+candidateId);
    }
    addCandidate(candidate){
        return axios.post(showUrl,candidate);  
    }
    deleteCandidate(candidateId){
        return axios.delete(showUrl+'/'+candidateId);
    }
    updateCandidate(candidateId,candiadte){
        console.log(candidateId,candiadte);
        return axios.put(showUrl+'/'+candidateId,candiadte);
    }
}
export default new CandidateService();