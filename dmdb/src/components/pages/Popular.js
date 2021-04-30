import React, { useContext } from "react";
import { PopularContext } from "../contexts/PopularContext";
import { CategoryContainer, Card, Title } from "../styles/GridStyles";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import { Link } from "react-router-dom";

function Popular() {
  const popular = useContext(PopularContext);
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

  return (
    <div>
      <Title>Our current popular movies</Title>
      <CategoryContainer repeatValue="23vw">
        {popular.map((movie) => (
          <Link
            to={`/static/asset/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <img
                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
              alt = {`movieposter_${movie.id}`}/>
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

export default Popular;
