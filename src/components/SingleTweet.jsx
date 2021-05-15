import { Link } from "react-router-dom";
import logo from "../logo.svg";
import DeleteBtn from "./DeleteBtn";
import LikeBtn from "./LikeBtn";
import "./RightSidebar.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/tweetActions";

function SingleTweet({ tweet }) {
  const [comment, setComment] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const userCommentModal = useRef();

  const handleClick = async (username) => {
    console.log(username, "click");
    let comentary = {
      text: comment,
      author: user.userName,
    };
    dispatch(actions.updateComment(tweet._id, comentary));
    await axios.post(
      "https://twitter-api-pi.vercel.app/api/tweets/comments",
      {
        text: comment,
        author: user.userName,
        tweetId: tweet._id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setComment("");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setIsVisible(!isVisible);
  //   let comentary = {
  //     text: comment,
  //     author: user.userName,
  //   };
  //   dispatch(actions.updateComment(tweet._id, comentary));
  //   // await axios.post(
  //   //   "https://twitter-api-pi.vercel.app/api/tweets/comments",
  //   //   {
  //   //     text: comment,
  //   //     author: user.userName,
  //   //     tweetId: tweet._id,
  //   //   },
  //   //   {
  //   //     headers: {
  //   //       Authorization: `Bearer ${user.token}`,
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //   }
  //   // );
  // };

  return (
    <div className="row g-0 text-light my-5">
      <div className="col-2">
        <img
          src={tweet.user.profilePicture ? tweet.user.profilePicture : logo}
          alt={tweet.user.userName}
          className="img-fluid rounded-circle"
          style={{ width: "60px", height: "60px", margin: "0 auto" }}
        />
      </div>
      <div className="col-10">
        <div className="header d-flex align-items-center">
          <Link to={`/perfil/${tweet.user.userName}`}>
            <h4 className="name">
              {tweet.user.firstName + " " + tweet.user.lastName}
            </h4>
          </Link>
          <small className="nikname ms-2">@{tweet.user.userName}</small>
          <small className="date ms-2">{tweet.createdAt}</small>
        </div>
        <p>{tweet.text}</p>
        <hr />
        <p>Comentarios:</p>
        <div></div>
        <div className="input-group mb-3">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control bg-dark text-light"
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => handleClick(tweet._id)}
          >
            Enviar
          </button>
        </div>

        {tweet.comments &&
          tweet.comments.map((comment) => {
            return <p key={comment._id}>{comment.text}</p>;
          })}
        <div className="row">
          <div className="col-12">
            <ul className="centro__ul d-flex align-items-center justify-content-between p-0">
              <li className="centro__li d-flex">
                <span className="centro__numero">
                  <DeleteBtn tweet={tweet} />
                </span>
              </li>
              <li
                className="centro__li d-flex"
                data-bs-toggle="modal"
                data-bs-target="#commentModal"
              >
                <svg className="centro__svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg>
                <span className="centro__numero">
                  {tweet.comments && tweet.comments.length}
                </span>
              </li>
              <li
                className="centro__li d-flex"
                data-bs-toggle="modal"
                data-bs-target="#workingOnIt"
              >
                <svg className="centro__svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                  </g>
                </svg>
                <span className="centro__numero">1</span>
              </li>
              <li className="centro__li d-flex align-items-center">
                <LikeBtn tweet={tweet} />
                <span className="centro__numero">{tweet.likes.length}</span>
              </li>
              <li
                className="centro__li d-flex pe-5"
                data-bs-toggle="modal"
                data-bs-target="#workingOnIt"
              >
                <svg className="centro__svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                    <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="modal fade text-white"
        id="workingOnIt"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style={{ background: "rgb(25, 39, 52)" }}>
            <div class="modal-body text-center">
              Funcionaliad en construcción 😀
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="follow-btn py-2 px-4 rounded-pill"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {isVisible && (
        <div
          ref={userCommentModal}
          class="modal fade text-white"
          id="commentModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div
              class="modal-content"
              style={{ background: "rgb(25, 39, 52)" }}
            >
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Haz un comentario
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form id="form-comment" onSubmit={handleSubmit}>
                  <input
                    className="bg-light text-dark form-control mb-3"
                    type="text"
                    name="comment"
                    maxLength="35"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </form>

                {tweet.comments &&
                  tweet.comments.map((comment) => {
                    return (
                      <div key={comment._id}>
                        <h3>
                          {" "}
                          <strong> @{comment.author}</strong>{" "}
                        </h3>

                        <p>{comment.text}</p>
                      </div>
                    );
                  })}
              </div>
              <div class="modal-footer">
                <button
                  className="btn btn-secondary rounded-pill px-4 py-2"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  form="form-comment"
                  class="follow-btn py-2 px-4 rounded-pill"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default SingleTweet;
