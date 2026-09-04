import api from "../utils/axios"



export const getResume = async () => {
    try {
        const responce = await api.get("/api/resume/get-resume")
        console.log(responce.data);
        return responce.data
         
    } catch (error) {
        console.log(error);
        return null
        
    }
}