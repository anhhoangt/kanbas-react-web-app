import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const [module, setModule] = useState({
    id: 1,
    name: "Web Dev",
    description: "develop a web",
    course: "CS572",
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/a5/module";

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <hr />

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-warning">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-warning"
      >
        Get Title
      </a>
      <br />
      <h4>Modifying Properties</h4>
      <a
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        className="btn btn-warning"
      >
        Update Title
      </a>
      <br />
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <br />
      <h4>Modifying Score Properties</h4>
      <a
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        className="btn btn-warning"
      >
        Update Score
      </a>
      <br />
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
        value={assignment.score}
      />
      <br />
      <h4>Modifying Completed Properties</h4>
      <a
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
        className="btn btn-warning"
      >
        Update Completed
      </a>
      <br />
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        checked={assignment.completed}
      />

      <h4>Retrieving Module Objects</h4>
      <a href="http://localhost:4000/a5/module" className="btn btn-warning">
        Get Module
      </a>
      <h4>Retrieving Module Properties</h4>
      <a
        href="http://localhost:4000/a5/module/name"
        className="btn btn-warning"
      >
        Get Name
      </a>
      {/* <br />
      <h4>Modifying Module Properties</h4>
      <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-warning">
        Update Name
      </a>
      <br />
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      /> */}

      <h4>Modifying Module Properties</h4>
      <a
        href={`${MODULE_URL}/description/${module.description}`}
        className="btn btn-warning"
      >
        Update Description
      </a>
      <br />
      <input
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
    </div>
  );
}
export default WorkingWithObjects;
