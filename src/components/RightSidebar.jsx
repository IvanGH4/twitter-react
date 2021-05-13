import SearchBox from "./SearchBox";
import "./RightSidebar.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../logo.svg";

function RightSidebar() {
  const [users, setUsers] = useState([]);

  const user = useSelector((state) => state.user);

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
    <div
      className="col-md-3 right-sidebar py-4"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <aside>
        <SearchBox />
        <div className="my-3">
          <div className="list-group">
            <div className="list-group-item d-flex align-items-center justify-content-between trending">
              <h4 className="text-light fw-bold">Tendencias para ti</h4>
              <i className="fas fa-cog text-light"></i>
            </div>
            <button className="list-group-item list-group-item-action d-flex justify-content-between trending">
              <div>
                <div>
                  <small>Tendencia en Uruguay</small>
                </div>
                <h6>Hack Academy</h6>
                <div>
                  <small>1.72 M tweets</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </button>
            <button className="list-group-item list-group-item-action d-flex justify-content-between trending">
              <div>
                <div>
                  <small>Tendencia en Uruguay</small>
                </div>
                <h6>BIOS</h6>
                <div>
                  <small>1.72 M tweets</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </button>
            <button className="list-group-item list-group-item-action d-flex justify-content-between trending">
              <div>
                <div>
                  <small>Tendencia en Uruguay</small>
                </div>
                <h6>
                  Usar <code className="text-light">br</code>{" "}
                </h6>
                <div>
                  <small>1.72 M tweets</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </button>
          </div>

          <div className="list-group mt-4">
            <div className="list-group-item d-flex align-items-center justify-content-between trending">
              <h4 className="fw-bold">A quién seguir</h4>
            </div>
            {users &&
              users.map((user) => {
                return (
                  <div
                    key={user._id}
                    className="list-group-item list-group-item d-flex justify-content-between align-items-center trending py-2"
                  >
                    <div className="d-flex">
                      <div>
                        <img
                          className="img-fluid rounded-circle"
                          src={user.profilePicture ? user.profilePicture : logo}
                          alt={user.userName}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div className="ms-1">
                        <h6>{user.firstName + " " + user.lastName}</h6>
                        <div>
                          <small>@{user.userName}</small>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <button className="rounded-pill px-3 py-1 follow-btn fw-bold">
                        Seguir
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="text-secondary">
            <small>Condiciones de servicio </small>
            <small>Condiciones de servicio </small>
            <small>Condiciones de servicio </small>
            <small>Condiciones de servicio </small>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default RightSidebar;
