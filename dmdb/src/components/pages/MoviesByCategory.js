import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import Loader from "react-loader-spinner";
import { CategoryContainer, Card } from "../styles/GridStyles";

function MoviesByCategory({ match }) {
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/category/${match.params.id}/assets/?page=1&size=20`
      );
      const category = await data.json();
      setCurrentCategory(category.data.results);
      setIsLoading(false);
    };
    fetchCategory();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  function getColorOfRating(number) {
    if (number <= 5.5) {
      console.log(number);
      return "#B22222";
    } else if (number > 5.5 && number < 7.5) {
      return "#999900";
    } else if (number >= 7.5) {
      return "#008000";
    }
  }

  const [currentCategory, setCurrentCategory] = useState([]);

  return (
    <div>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#FF1D36"
          height="100"
          width="100"
          text-align="center"
          margin="auto"
          vertical-align="middle"
        />
      ) : null}
      <CategoryContainer repeatValue="18vw">
        {currentCategory.map((movie) => (
          <Link
            to={`/static/asset/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <img
                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                alt = {`movieposter_${movie.id}`} />
              <h2>{movie.title}</h2>
              <h3 style={{ color: getColorOfRating(movie.vote_average) }}>
                <GradeRoundedIcon
                  style={{
                    fontSize: "20",
                    textAlign: "center",
                    color: getColorOfRating(movie.vote_average),
                  }}
                />
                {movie.vote_average} / 10
              </h3>
            </Card>
          </Link>
        ))}
      </CategoryContainer>
    </div>
  );
}

export default MoviesByCategory;
