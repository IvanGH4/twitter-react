import "./SearchBox.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBox() {
  const user = useSelector((state) => state.user);

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8080/api/index", {
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
    <div className="position-relative">
      <form className="rounded-pill trending py-2">
        <div className="py-2 px-3 d-flex justify-content-between align-items-center">
          <div>
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            placeholder="Buscar en Twitter"
            className="border-0 search-input text-light"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
      <div
        className={`search-results text-white p-2 rounded ${
          searchTerm.length > 0 && "show"
        }`}
      >
        {users
          .filter((user) =>
            user.userName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((user) => {
            return (
              <Link className="my-2" to={`/perfil/${user.userName}`}>
                {user.userName}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBox;
