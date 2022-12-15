import axios from "axios"
const showUrl="http://localhost:8080/api/v1/tech/interviews";

class TechService{

    getTechInterviews(){
        return axios.get(showUrl);
    }
    getInterviewCandidates(){
        return axios.get(showUrl+'/candidates');
    }
    giveRating(interviewId,techRating){
        return axios.put(showUrl+'/'+interviewId+'/'+techRating);
    }
   
}
export default new TechService();