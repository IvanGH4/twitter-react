import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import axios from "axios";
import FollowBtn from "../components/FollowBtn";
import logo from "../logo.svg";
import SingleTweet from "../components/SingleTweet";
import { useToasts } from "react-toast-notifications";
import "../components/RightSidebar.css";
import actions from "../redux/actions/tweetActions";
import currUserActions from "../redux/actions/currUserActions";

function ProfilePage() {
  const [singleUser, setSingleUser] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const currentUser = useSelector((state) => state.currentUser);

  let { username } = useParams();

  const { addToast } = useToasts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", avatar);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("bio", bio);
    await axios({
      method: "PATCH",
      url: `https://twitter-api-pi.vercel.app/api/users/profile`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    });
    getUser();
    addToast("Guardado con éxito", { appearance: "success" });
  };

  const getUser = async () => {
    const response = await axios.get(
      "https://twitter-api-pi.vercel.app/api/users/profile",
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
    dispatch(currUserActions.setCurrUser(response.data.user));
    setSingleUser(response.data.user);
  };

  useEffect(() => {
    if (singleUser) {
      setFirstName(singleUser.firstName);
      setLastName(singleUser.lastName);
      setBio(singleUser.description);

      const getUserTweets = async () => {
        const response = await axios.get(
          "https://twitter-api-pi.vercel.app/api/users/profile/tweets",
          {
            params: {
              userId: singleUser._id,
            },
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        dispatch(actions.setTweets(response.data.tweets));
      };
      getUserTweets();
    }
  }, [singleUser]);

  useEffect(() => {
    getUser();
  }, [username]);

  return (
    <div className="container">
      {singleUser && (
        <div className="row justify-content-center">
          <LeftSidebar />
          <div
            className="col-md-6 p-0"
            style={{
              borderLeft: "solid 1px rgb(107, 125, 140)",
              borderRight: "solid 1px rgb(107, 125, 140)",
            }}
          >
            <div className="text-white">
              <div className="d-flex align-items-center px-4 py-4">
                <Link
                  to="/home"
                  className="me-3 fs-4 text-decoration-none"
                  style={{ color: "rgb(29, 161, 242)" }}
                >
                  <i className="fas fa-arrow-left"></i>
                </Link>
                <div>
                  <h3 className="fs-5 m-0">
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
              <div className="d-flex justify-content-between align-items-center  px-4">
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

                {Object.entries(singleUser).length > 0 &&
                singleUser.userName === user.userName ? (
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#editProfileModal"
                    className="rounded-pill px-3 py-2 follow-btn fw-bold"
                  >
                    Editar perfil
                  </button>
                ) : (
                  <FollowBtn user={singleUser} />
                )}
              </div>
              <div className="px-4 mt-4">
                <h4>{singleUser.firstName + " " + singleUser.lastName}</h4>
                <p>@{singleUser.userName}</p>
              </div>
              <div className="px-4">{singleUser.description}</div>
              <div
                style={{ color: "rgb(107, 125, 140)" }}
                className="mt-3 px-4 tweetCreatedAt"
              ></div>
              <div className="d-flex align-items-center mt-3 pb-2 px-4">
                <span className="fw-bold text-light me-2"></span>
                <button
                  type="button"
                  className="btn p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ color: "rgb(107, 125, 140)" }}
                >
                  {currentUser.following.length} siguiendo
                </button>

                <span className="fw-bold text-light me-2"></span>
                <button
                  type="button"
                  className="btn p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ color: "rgb(107, 125, 140)" }}
                >
                  {currentUser.followers.length} seguidores
                </button>
              </div>
              <div
                className="px-4 mt-4 pb-2"
                style={{ borderBottom: "solid 1px rgb(107, 125, 140)" }}
              >
                <p
                  className="fw-bold pb-2 d-inline-block"
                  style={{
                    borderBottom: "solid 4px rgb(29, 161, 242)",
                    color: " rgb(29, 161, 242)",
                  }}
                >
                  Tweets
                </p>
              </div>
            </div>
            {tweets.map((tweet) => {
              return <SingleTweet key={tweet._id} tweet={tweet} />;
            })}
          </div>
          <RightSidebar />
          <div
            className="modal fade text-white"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{ backgroundColor: "rgb(21, 32, 43)" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Seguidos y seguidores
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h4
                          className="fw-bold fs-3"
                          style={{ color: "rgb(29, 161, 242)" }}
                        >
                          Seguidores
                        </h4>

                        {singleUser.followers.map((follower) => {
                          return (
                            <Link
                              to={`/perfil/${follower.userName}`}
                              className="my-2"
                            >
                              @{follower.userName}
                            </Link>
                          );
                        })}
                      </div>
                      <div className="col-md-6">
                        <h4
                          className="fw-bold fs-3"
                          style={{ color: "rgb(29, 161, 242)" }}
                        >
                          Seguidos
                        </h4>

                        {singleUser.following.map((followed) => {
                          return (
                            <Link
                              to={`/perfil/${followed.userName}`}
                              className="my-2"
                            >
                              @{followed.userName}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade text-white"
            id="editProfileModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content bg-dark">
                <div className="modal-header bg-dark">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Editar perfil
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body bg-dark">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="image" className="form-label">
                        Suba su imágen de perfil
                      </label>
                      <input
                        id="image"
                        type="file"
                        name="image"
                        className="form-control"
                        onChange={(e) => setAvatar(e.target.files[0])}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Nombre
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Apellido
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        id="exampleInputPassword1"
                        className="form-control"
                        cols="30"
                        rows="10"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                      >
                        {bio}
                      </textarea>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary ms-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
