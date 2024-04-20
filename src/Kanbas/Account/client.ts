import axios from "axios";

// export const USERS_API = "https://kanbas-node-server-app-bshj.onrender.com/api/users";
export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;
export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string, dob: string, email: string,  };

export const login = async (credentials: User) => {
    const response = await axios.post( `${USERS_API}/login`, credentials );
    return response.data;
  };

export const fetchAllUsers = async () => {
    const response = await axios.get("/users", { withCredentials: true });
    return response.data;
};

export const registerUser = async (user: User) => {
    // const response = await request.get(`/users/register/${user.username}/${user.password}`);
    const response = await axios.post( `${USERS_API}/register`, user, { withCredentials: true });
    return response.data;
};

export const createUser = async (user: User) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
  };

  export const deleteUser = async (user: any) => {
    const response = await axios.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };  

  export const findUserById = async (id: string) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
  };

  export const findUsersByRole = async (role: string) => {
    const response = await
      axios.get(`${USERS_API}?role=${role}`);
    return response.data;
  };
  
  
  
  
export const profile = async () => {
    const response = await axios.post(`${USERS_API}/profile`, { withCredentials: true });
    console.log(response.data);
    return response.data;
};

export const logoutUser = async () => {
    const response = await axios.post(`${USERS_API}/logout`, { withCredentials: true });
    return response.data;
};
export const updateUser = async (user: User) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user, { withCredentials: true });
    return response.data;
  };

  export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
  };
  
  