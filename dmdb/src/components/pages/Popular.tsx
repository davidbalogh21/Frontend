import React, { useContext } from "react";
import { PopularContext, PopularInfo } from "../contexts/PopularContext";
import { CategoryContainer, Card, Title } from "../styles/GridStyles";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import { Link } from "react-router-dom";
import RatingColor from "../functions/RatingColor"

function Popular() {

  const popular = useContext<PopularInfo[]>(PopularContext);

  return (
    <div>
      <Title>Our current popular movies</Title>
      <CategoryContainer repeatValue="23vw">
        {popular.map((movie) => (
          <Link
            to={`/static/asset/${movie.id}`}
            style={{ textDecoration: "none" }}
            key={`id_${movie.id}`}
          >
            <Card key={`id_${movie.id}`}>
              <img
                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
              alt = {`movieposter_${movie.id}`}/>
              <h2>{movie.title}</h2>
              <h3 style={{ color: RatingColor(movie.vote_average) }}>
                <GradeRoundedIcon
                  style={{
                    fontSize: "20",
                    textAlign: "center",
                    color: RatingColor(movie.vote_average),
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
