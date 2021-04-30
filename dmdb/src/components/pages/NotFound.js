import React, { useContext } from "react";
import NotFoundGif from "../../assets/images/notfound.gif";
import { Gif, Wrapper } from "../styles/NotFoundStyles";
import { CategoryContainer, Card } from "../styles/GridStyles";
import { PopularContext } from "../contexts/PopularContext";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import { Link } from "react-router-dom";

function NotFound() {
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
      <Wrapper>
        <Gif src={NotFoundGif} alt="error404" />
        <h1>It looks like the page you were looking for could not be found!</h1>
        <h2>Meanwhile here are some popular movies!</h2>
      </Wrapper>
      <CategoryContainer repeatValue="22vw">
        {popular.slice(popular.length - 3, popular.length).map((movie) => (
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

export default NotFound;
