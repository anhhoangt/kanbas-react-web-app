import axios from "axios";
export const fetchAllCourses = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
  };

  export const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `http://localhost:4000/api/courses/${courseId}`
    );
    return response.data;
  }

  export const createCourse = async (course: any) => {
    const response = await axios.post("http://localhost:4000/api/courses", course);
    return response.data;
  }

  export const updateCourse = async (course: any) => {
    const response = await axios.put(
      `http://localhost:4000/api/courses/${course._id}`,
      course
    );
    return response.data;
  }
  
  // Deletes a course by its id
    export const deleteCourse = async (courseId: string) => {
        const response = await axios.delete(`http://localhost:4000/api/courses/${courseId}`);
        return response.data;
    }