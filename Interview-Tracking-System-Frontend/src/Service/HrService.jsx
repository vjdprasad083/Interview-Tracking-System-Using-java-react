import axios from "axios"
const showUrl="http://localhost:8080/api/v1/hr/interviews";

class HrService{

    getInterviews(){
        return axios.get(showUrl);
    }
    getInterviewCandidates(){
        return axios.get(showUrl+'/candidates');
    }
    giveRating(interviewId,hrRating){
        return axios.put(showUrl+'/'+interviewId+'/'+hrRating);
    }
   
}
export default new HrService();