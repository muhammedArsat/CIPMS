import {api} from "../../api"

/**
 * @description  fetch all students
 */

export const fetchStudentProfile=async()=>{
    const res=await api.get("/students/profile")
    return res.data
}
/**
 * @description fetch a student's all application
 */
export const fetchStudentApplication=async()=>{
    const res=await api.get("/students/application")
    return res.data
}

/**
 * @description fetch all saved internships
 */
export const fetchAllSavedInternship=async()=>{
    const res=await api.get("/students/saved")
    return res.data
}
/**
 * @description fetch all recommendations
 */
export const fetchAllRecommendations= async()=>{
    const res=await api.get("/students/recommendations")
    return res.data
}
/**
 * @description get assigned mnetor
 */
export const fetchStudentMentor=async()=>{
    const res=await api.get("/students/mentor")
    return res.data
}
/**
 * @description create student profile
 */
export const createStudentProfile=async(formData:FormData)=>{
    const res=await api.post("/students/profile",formData{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
    return res.data

}
/**
 * @description Update student profile
 */
export const updateStudentProfile=async (formData:FormData)=>{
    const res=await api.put("/students/profile",formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
    return res.data;
}
/**
 * @description Remove saved internship
 */
export const deleteSavedInternship=async (internshipId:string)=>{
    const res=await api.delete(`/students/deleteSaved`,{
        data:{internshipId}
    })
    return res.data;
}
