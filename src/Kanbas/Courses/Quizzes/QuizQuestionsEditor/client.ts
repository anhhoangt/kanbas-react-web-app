import axios from "axios";

const QUESTIONS_API = "https://kanbas-node-server-app-bshj.onrender.com/api/questions";
const QUIZZES_API = "https://kanbas-node-server-app-bshj.onrender.com/api/quizzes";
// const API_BASE = "http://localhost:4000";
// const QUIZZES_API = `${API_BASE}/api/quizzes`;
// const QUESTIONS_API = `${API_BASE}/api/questions`;

export const fetchAllQuestions = async () => {
  const response = await axios.get(`${QUESTIONS_API}`);
  return response.data;
}   

export const fetchQuestionById = async (questionId: string) => {
  const response = await axios.get(`${QUESTIONS_API}/${questionId}`);
  return response.data;
}

export const findQuestionsForQuiz = async (quizId?: string) => {
  const response = await axios
    .get(`${QUIZZES_API}/${quizId}/questions`);
    console.log(response.data);
  return response.data;
}

export const createQuestion = async (quizId?:string, question?:any) => {
    console.log('quizId:', quizId);
  console.log('question:', question);
  try {
    const response = await axios.post(
      `${QUIZZES_API}/${quizId}/questions`,
      question
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating question:', error);
  }
};

export const updateQuestion = async (question?: any) => {    
  const response = await axios.put(`${QUESTIONS_API}/${question._id}`, question);
  return response.data;
}

export const deleteQuestion = async (questionId: any) => {
    const response = await axios.delete(`${QUESTIONS_API}/${questionId}`);
    return response.data;
    }

// export const addChoice = async (questionId: any, choice: any) => {
//     const response = await axios.post(`${QUESTIONS_API}/${questionId}/choices`, choice);
//     return response.data;
// }

// export const updateChoice = async (choice: any) => {
//     const response = await axios.put(`${QUESTIONS_API}/choices/${choice._id}`, choice);
//     return response.data;
// }

// export const deleteChoice = async (choiceId: any) => {
//     const response = await axios.delete(`${QUESTIONS_API}/choices/${choiceId}`);
//     return response.data;
// }
