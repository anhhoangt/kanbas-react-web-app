import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../client";
import { User } from "../client";

import { Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });

  const navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const profile = await client.profile();
      setProfile(profile);
      console.log(profile);
    } catch (error) {
      console.log(error);
      navigate("/Kanbas/Account/login");
    }
  };

  const logout = async () => {
    await client.logoutUser();
    navigate("/Kanbas/Account/login");
  };

  const save = async () => {
    await client.updateUser(profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile);

  return (
    <div>
      <h1>Profile</h1>

      <div>
        <div className="row">
          <div className="col">
            <h2>Username</h2>
          </div>
          <div className="col text-right">
            <button className="btn btn-success">
              <Link to={`/Kanbas/Account/profile/edit`}>Edit Profile</Link>
            </button>
          </div>
        </div>

        <div className="container">
          <h3>Contact</h3>
          <p>
            No registered services, you can add some on the
            <a href="https://www.google.com/">settings</a> page
          </p>
          <h3>Biography</h3>
          <p>Faculty, Software Engineer, AI, Space, and renewable enthusiast</p>
          <h3>Links</h3>
          <a href="https://google.com/">YouTube</a>
        </div>
        {/* <div>
          <h3>Personal Information</h3>
          <ul>
            <li>
              <strong>First Name:</strong> {profile.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {profile.lastName}
            </li>
            <li>
              <strong>Date of Birth:</strong> {profile.dob}
            </li>
            <li>
              <strong>Email:</strong> {profile.email}
            </li>
            <li>
              <strong>Role:</strong> {profile.role}
            </li>
          </ul>
        </div> */}
        <div className="text-center mt-5 mb-5">
          <button className="btn btn-secondary m-3" onClick={save}>
            Save
          </button>
          <button onClick={logout} className="btn btn-alert ">
            Log out
          </button>
        </div>
      </div>

      {profile && (
        <div>
          <input
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            value={profile.dob}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">
        Users
      </Link>
    </div>
  );
}

export default Profile;
