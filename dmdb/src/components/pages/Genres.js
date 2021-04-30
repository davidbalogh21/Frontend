import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardPhoto from "../card/CardPhoto";
import Loader from "react-loader-spinner";
import { Title } from "../styles/GridStyles";
import { CategoryContainer, Card } from "../styles/GenreStyles";

function Genres() {
  useEffect(() => {
    fetchGenres();
  }, []);

  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGenres = async () => {
    const data = await fetch("https://video-proxy.3rdy.tv/api/vod/category");
    const temp_genres = await data.json();
    setGenres(temp_genres.data.genres);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader type="ThreeDots" color="#FF1D36" height="100" width="100" />
      ) : null}
      <Title>Categories</Title>
      <CategoryContainer>
        {genres.map((allGenres) => (
          <Link
            to={`/static/movies/${allGenres.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card>
              <CardPhoto id={allGenres.id} name={allGenres.name} />
            </Card>
          </Link>
        ))}
      </CategoryContainer>
    </div>
  );
}

export default Genres;
