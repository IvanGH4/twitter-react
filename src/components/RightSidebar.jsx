import SearchBox from "./SearchBox";
import "./RightSidebar.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../logo.svg";
import FollowBtn from "./FollowBtn";
import { Link, useLocation } from "react-router-dom";

function RightSidebar() {
  const [users, setUsers] = useState([]);

  const user = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.currentUser);

  const location = useLocation();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://twitter-api-pi.vercel.app/api/users",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setUsers(response.data.users);
    };
    getUsers();
  }, []);

  return (
    <div
      className="col-md-3 right-sidebar py-4 d-none d-lg-block"
      // style={{ height: "100vh", overflowY: "auto" }}
    >
      <aside className="position-sticky sticky-top">
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
                <h6>Desarrollo web</h6>
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
                  Node.js
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
              <h4 className="fw-bold">A qui??n seguir</h4>
            </div>
            {users &&
              users
                .filter((user) => user.userName !== currentUser.userName)
                .map((user) => {
                  return (
                    <div
                      key={user._id}
                      className="list-group-item list-group-item d-flex justify-content-between align-items-center flex-wrap trending py-2"
                    >
                      <div className="d-flex">
                        <div>
                          <img
                            className="img-fluid rounded-circle"
                            src={
                              user.profilePicture ? user.profilePicture : logo
                            }
                            alt={user.userName}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                        <div className="ms-1">
                          <Link to={`/perfil/${user.userName}`}>
                            {" "}
                            <h6
                              style={{
                                width: "90px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {user.firstName + " " + user.lastName}
                            </h6>
                          </Link>

                          <div
                            style={{
                              width: "70px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <small>@{user.userName}</small>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-start mt-1">
                        <FollowBtn user={user} />
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
