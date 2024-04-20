import axios from "axios";

// const ANSWERS_API = "https://kanbas-node-server-app-bshj.onrender.com/api/answers";
// const QUESTIONS_API = "https://kanbas-node-server-app-bshj.onrender.com/api/questions";
const API_BASE = "http://localhost:4000";
const ANSWER_API = `${API_BASE}/api/answers`;
const QUESTIONS_API = `${API_BASE}/api/questions`;

export const fetchAllAnswers = async () => {
    const response = await axios.get(`${ANSWER_API}`);
    return response.data;
    }

export const findAnswersForQuestion = async (questionId?: string) => {
  const response = await axios.get(`${QUESTIONS_API}/${questionId}/answers`);
  console.log(response.data);
  return response.data;
}

export const createNewAnswer = async (questionId?:string, answer?:any) => {
  console.log('questionId:', questionId);
  console.log('answer:', answer);
  try {
    const response = await axios.post(
      `${QUESTIONS_API}/${questionId}/answers`,
      answer
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating answer:', error);
  }
}

export const updateAnswer = async (answer?: any) => {    
  console.log('answer:', answer);
  const response = await axios.put(`${ANSWER_API}/${answer._id}`, answer);
  return response.data;
}

export const deleteAnswer = async (answerId: any) => {  
  const response = await axios.delete(`${ANSWER_API}/${answerId}`);
  return response.data;
}