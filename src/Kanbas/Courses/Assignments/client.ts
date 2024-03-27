import axios from "axios";
// const COURSES_API = "http://localhost:4000/api/courses";
const COURSES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/courses";
// const ASSIGNMENTS_API = "http://localhost:4000/api/assignments";
const ASSIGNMENTS_API = "https://kanbas-node-server-app-bshj.onrender.com/api/assignments";
// const API_BASE = process.env.REACT_APP_API_BASE;
// const COURSES_API = `${API_BASE}/api/courses`;
// const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const fetchAllAssignments = async () => {
  const response = await axios.get(`${ASSIGNMENTS_API}`);
  return response.data;
}

export const fetchAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
}

export const findAssignmentsForCourse = async (courseId?: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
}

export const createAssignment = async (courseId?:string, assignment?:any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment?: any) => {    
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
}

// Deletes an Assignment by ID
export const deleteAssignment = async (assignmentId: any) => {  
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
    };