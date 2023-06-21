import { useState } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Background = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchText}`);
  };

  return (
    <div className="background">
      <div className="backdrop-img">
        <img
          src="https://image.tmdb.org/t/p/original/wYYVBBK3O8sb7J4WxkRx1bI7Q8c.jpg"
          alt=""
        />

        <div className="overlay"></div>
      </div>

      <div className="search">
        <div className="wrapper">
          <h1>Welcome.</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>

          <div className="search__button">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);

                // setSearchText()
              }}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Background;
