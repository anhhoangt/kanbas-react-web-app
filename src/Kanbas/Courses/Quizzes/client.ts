import axios from "axios";

// const COURSES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/courses";
// const QUIZZES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/quizzes";
const API_BASE = "http://localhost:4000";
const COURSES_API = `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

export const fetchAllQuizzes = async () => {
  const response = await axios.get(`${QUIZZES_API}`);
  return response.data;
}

export const fetchQuizById = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
}

export const findQuizzesForCourse = async (courseId?: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/quizzes`);
    console.log(response.data);
  return response.data;
}

export const createQuiz = async (courseId?:string, quiz?:any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return response.data;
};

export const updateQuiz = async (quiz?: any) => {    
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
}

// Deletes an Quiz by ID
export const deleteQuiz = async (quizId: any) => {
    const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
    }