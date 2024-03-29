import React, { useState, useEffect } from "react";
import axios from "axios";
export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};
function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [errorMessage, setErrorMessage] = useState(null);

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    description: "",
    completed: false,
  });
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: Todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    console.log(response.data);
    setTodo(response.data);
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      console.log(response.data);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API}>Get Todos</a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: Number(e.target.value) })}
      />
      <a href={`${API}/${todo.id}`}>Get Todo by ID</a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}>Get Completed Todos</a>

      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>Create Todo</a>

      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}>Delete Todo with ID = {todo.id}</a>
      <br />
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: Number(e.target.value),
          })
        }
      />
      <br />
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Title to {todo.title}
      </a>
      <br />
      <hr />
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: Number(e.target.value),
          })
        }
      />
      <br />
      <input
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <h3>Updating description of an Item in an Array</h3>
      <a href={`${API}/${todo.id}/description/${todo.description}`}>
        Update Description to {todo.description}
      </a>
      <hr />
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: Number(e.target.value),
          })
        }
      />
      <br />
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
      />
      <h3>Updating completed of an Item in an Array</h3>
      <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Update Completed to todo ID {todo.id}
      </a>

      <hr />
      <button className="btn btn-primary m-2" onClick={createTodo}>
        Create Todo
      </button>
      <button className="btn btn-success" onClick={updateTitle}>
        Update Title
      </button>
      <hr />
      <textarea
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <input
        value={todo.title}
        type="text"
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <br />
      <label>
        <input
          checked={todo.completed}
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>
      <br />
      <button onClick={postTodo}> Post Todo </button>
      <hr />
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <input checked={todo.completed} type="checkbox" readOnly />
            <p>{todo.title}</p>{" "}
            <button className="btn" onClick={updateTodo}>
              Update Todo
            </button>{" "}
            <button
              className="btn btn-secondary"
              onClick={() => fetchTodoById(todo.id)}
            >
              Edit
            </button>{" "}
            <button className="btn btn-danger" onClick={() => removeTodo(todo)}>
              Remove
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
