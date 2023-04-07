import axios from "axios"
const showUrl="http://localhost:8080/api/v1/tech/interviews";

class TechService{

    getTechInterviewsById(interview){
        return axios.get(showUrl+'/'+interview);
    }
    getInterviewCandidates(panelMemberId){
        return axios.get(showUrl+'/candidates'+'/'+panelMemberId);
    }
    giveRating(interviewId,techRating){
        return axios.put(showUrl+'/'+interviewId+'/'+techRating);
    }
   
}
export default new TechService();