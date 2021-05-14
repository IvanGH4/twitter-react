import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import axios from "axios";
// import FollowBtn from "../components/FollowBtn";
import logo from "../logo.svg";

function ProfilePage() {
  const [singleUser, setSingleUser] = useState({});
  const user = useSelector((state) => state.user);
  let { username } = useParams();
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/users/profile",
        {
          params: {
            username: username,
          },
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("esta es la response : ", typeof response.data.user);
      setSingleUser(response.data.user);
    };
    getUser();
  }, [username]);

  return (
    <div class="container">
      <div class="row justify-content-center">
        <LeftSidebar />
        <div
          class="col-md-6 p-0"
          style={{
            borderLeft: "solid 1px rgb(107, 125, 140)",
            borderRight: "solid 1px rgb(107, 125, 140)",
          }}
        >
          <div className="text-white">
            <div class="d-flex align-items-center px-4 py-4">
              <Link
                to="/home"
                class="me-3 fs-4 text-decoration-none"
                style={{ color: "rgb(29, 161, 242)" }}
              >
                <i class="fas fa-arrow-left"></i>
              </Link>
              <div>
                <h3 class="fs-5 m-0">
                  {singleUser.firstName + " " + singleUser.lastName}
                </h3>
                <small style={{ color: "rgb(107, 125, 140)" }}></small>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
                alt=""
                style={{ maxHeight: "300px", width: "100%" }}
              />
            </div>
            <div class="d-flex justify-content-between align-items-center  px-4">
              <img
                style={{
                  marginTop: "-80px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
                src={
                  singleUser.profilePicture ? singleUser.profilePicture : logo
                }
                alt={singleUser.userName}
              />

              {/* {Object.entries(singleUser).length > 0 &&
              singleUser.userName === user.userName ? (
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#editProfileModal"
                  class="rounded-pill px-3 py-2 fw-bold"
                  style={{
                    color: "rgb(29, 161, 242)",
                    backgroundColor: "transparent",
                    border: "solid 1px rgb(29, 161, 242);",
                  }}
                >
                  Editar perfil
                </button>
              ) : (
                <FollowBtn user={singleUser} />
              )} */}
            </div>
            <div class="px-4 mt-4">
              <h4>{singleUser.firstName + " " + singleUser.lastName}</h4>
              <p>@{singleUser.userName}</p>
            </div>
            <div class="px-4"></div>
            <div
              style={{ color: "rgb(107, 125, 140)" }}
              class="mt-3 px-4 tweetCreatedAt"
            ></div>
            <div class="d-flex align-items-center mt-3 pb-2 px-4">
              <span class="fw-bold text-light me-2"></span>
              <button
                type="button"
                class="btn p-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ color: "rgb(107, 125, 140)" }}
              >
                {singleUser.following.length} siguiendo
              </button>

              <span class="fw-bold text-light me-2"></span>
              <button
                type="button"
                class="btn p-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ color: "rgb(107, 125, 140)" }}
              >
                {singleUser.followers.length} seguidores
              </button>
            </div>
            <div
              class="px-4 mt-4 pb-2"
              style={{ borderBottom: "solid 1px rgb(107, 125, 140)" }}
            >
              <p
                class="fw-bold pb-2 d-inline-block"
                style={{
                  borderBottom: "solid 4px rgb(29, 161, 242)",
                  color: " rgb(29, 161, 242)",
                }}
              >
                Tweets
              </p>
            </div>
          </div>
        </div>
        <RightSidebar />
      </div>
      <div
        class="modal fade text-white"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgb(21, 32, 43)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Seguidos y seguidores
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <h4
                      class="fw-bold fs-3"
                      style={{ color: "rgb(29, 161, 242)" }}
                    >
                      Seguidores
                    </h4>

                    {singleUser.followers.map((follower) => {
                      return (
                        <Link to={`/perfil/${follower.userName}`} class="my-2">
                          @{follower.userName}
                        </Link>
                      );
                    })}
                  </div>
                  <div class="col-md-6">
                    <h4
                      class="fw-bold fs-3"
                      style={{ color: "rgb(29, 161, 242)" }}
                    >
                      Seguidos
                    </h4>

                    {singleUser.following.map((followed) => {
                      return (
                        <Link to={`/perfil/${followed.userName}`} class="my-2">
                          @{followed.userName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="editProfileModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-header bg-dark">
              <h5 class="modal-title" id="exampleModalLabel">
                Editar perfil
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-dark">
              <form>
                <div class="mb-3">
                  <label for="image" class="form-label">
                    Suba su imágen de perfil
                  </label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Nombre
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="<%= user.firstName %> "
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Apellido
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    value="<%= user.lastName %> "
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="exampleInputPassword1"
                    class="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
