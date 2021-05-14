import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function ExplorePage() {
  const user = useSelector((state) => state.user);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8080/api/users", {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data.users);
    };
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <LeftSidebar />

        <div className="col-md-6 my-3">
          {users.map((user) => {
            return (
              <Link
                className="text-white d-flex justify-content-center"
                to={`/perfil/${user.userName}`}
              >
                {" "}
                {/* <div
                  className="card my-4 p-4 bg-dark"
                  style={{ width: "50%", height: "200px", margin: "0 auto" }}
                  key={user._id}
                >
                  <img
                    src={user.profilePicture ? user.profilePicture : logo}
                    className="card-img-top img-fluid"
                    alt={user.userName}
                  />
                  <div className="card-body">
                    <h2>{user.userName}</h2>
                  </div>
                </div> */}
                <div
                  className="card bg-dark my-4"
                  style={{ width: "20rem", minHeight: "20rem" }}
                >
                  <img
                    src={user.profilePicture ? user.profilePicture : logo}
                    className="card-img-top"
                    alt={user.userName}
                  />
                  <div className="card-body">
                    <p className="card-text">{user.userName}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}

export default ExplorePage;
