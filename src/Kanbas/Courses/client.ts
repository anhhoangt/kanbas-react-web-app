import axios from "axios";

const COURSES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/courses";
// const API_BASE = "http://localhost:4000";
// const COURSES_API = `${API_BASE}/api/courses`;

export const fetchAllCourses = async () => {
    const response = await axios.get(`${COURSES_API}`);
    return response.data;
  };

  export const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    return response.data;
  }

  export const createCourse = async (course: any) => {
    const response = await axios.post(`${COURSES_API}`, course);
    return response.data;
  }

  export const updateCourse = async (course: any) => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    return response.data;
  }
  
  // Deletes a course by its id
    export const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(`${COURSES_API}/${courseId}`);
        return response.data;
    }