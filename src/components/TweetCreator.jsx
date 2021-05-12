import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function TweetCreator() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    const getLoggedInUserData = async () => {
      const response = await axios.get("http://localhost:8080/api/index-user", {
        params: {
          username: user.userName,
        },
        headers: {
          Authorization: `token ${user.token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      setLoggedInUser(response.data.user);
    };
    getLoggedInUserData();
  }, []);

  return (
    <div className="row py-4">
      <div className="col-2">
        <img
          src={loggedInUser && loggedInUser.profilePicture}
          alt={user.userName}
          className="img-fluid rounded-circle"
          style={{ width: "60px", height: "60px", margin: "0 auto" }}
        />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col">
            <form action="#" id="submit-tweet">
              <textarea
                className="text-light"
                name=""
                id="tweet"
                cols="50"
                rows="1"
                placeholder="Qué está pasando..."
              ></textarea>
            </form>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-6">
            <ul className="d-flex align-items-center list-unstyled">
              <li>
                <i className="fas fa-trash"></i>
              </li>
              <li>
                <i className="fas fa-trash"></i>
              </li>
              <li>
                <i className="fas fa-trash"></i>
              </li>
              <li>
                <i className="fas fa-trash"></i>
              </li>
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              type="submit"
              form="submit-tweet"
              className="ms-auto tweet-btn px-3 text-light fw-bold rounded-pill"
            >
              Twittear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCreator;
