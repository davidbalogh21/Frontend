import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Title,
  Date,
  Plot,
  Box,
  TextBox,
  ActorBox,
  Poster,
  ActorPhoto,
  CompanyPhoto,
  ActorName,
  Button,
  ImportantText,
} from "../../components/styles/AssetStyles";




function AssetDetails({ match }) {
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/asset/${match.params.id}`
      );
      const movie = await data.json();
      setMovie(movie.data);
      setCast(movie.data.credits.cast);
      setCompanies(movie.data.production_companies);
    };
    fetchMovies();
  }, []);

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [companies, setCompanies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Box>
        <Poster
          src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
        />
        <TextBox>
          <Title>{movie.original_title}</Title>
          <Date>Released in: {movie.release_date}</Date>
          <Plot>{movie.overview}</Plot>
          <Plot>{movie.tagline}</Plot>
          <Plot>Runtime: {movie.runtime} minutes</Plot>
          <Date>
            Rating: {movie.vote_average}/10 from {movie.vote_count} users
          </Date>
          <Button
            buttonColor="#F5C519"
            href={`https://www.imdb.com/title/${movie.imdb_id}`} target="blank"
          >
            IMDB
          </Button>
          <Button buttonColor="#FF1F00">Youtube</Button>
        </TextBox>
      </Box>

      <ActorBox>
        <ImportantText>Cast: </ImportantText>

        {cast.slice(0, 10).map((actors) => (
          <div>
            <ActorName>{actors.name}</ActorName>
              <ActorPhoto
                src={`https://www.themoviedb.org/t/p/original/${actors.profile_path}`}
              />
          </div>
        ))}
      </ActorBox>

      <ActorBox>
        <ImportantText>Production companies: </ImportantText>

        {companies.map((company) => (
          <div>
            <ActorName>{company.name}</ActorName>
            <CompanyPhoto
              src={`https://www.themoviedb.org/t/p/original/${company.logo_path}`}
            />
          </div>
        ))}
      </ActorBox>
    </div>
  );
}

export default AssetDetails;
