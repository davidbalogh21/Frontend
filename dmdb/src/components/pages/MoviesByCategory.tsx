import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import Loader from "react-loader-spinner";
import { CategoryContainer, Card } from "../styles/GridStyles";
import { Title } from "../styles/AssetStyles";
import { RouteComponentProps } from 'react-router';
import RatingColor from "../functions/RatingColor"

type TParams = { id: string, name: string }

interface CategoryInfo {
  id: number | string | null;
  title: string | null;
  poster_path: number | string | null;
  vote_average: number;
}

const PAGE_NUMBER: number = 1;

function MoviesByCategory({ match }: RouteComponentProps<TParams>) {
  const [pageNum, setPageNum] = useState<number>(PAGE_NUMBER);

  useEffect(() => {
    const fetchCategory = async (pageNum: number) => {
      const data = await fetch(
        `https://video-proxy.3rdy.tv/api/vod/category/${match.params.id}/assets/?page=${pageNum}&size=20`
      );
      const category = await data.json();
      setCurrentCategory([...currentCategory, ...category.data.results]);
      setIsLoading(false);
    };
    fetchCategory(pageNum);
  }, [pageNum]);

  window.onscroll = function () {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      setPageNum(pageNum + 1);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState<CategoryInfo[]>([]);

  return (
    <div>
      {isLoading ? (
        <Loader type="ThreeDots" color="#FF1D36" height="100" width="100" />
      ) : null}
      <Title>{match.params.name}</Title>
      <CategoryContainer repeatValue="18vw" id="category">
        {currentCategory.map((movie) => (
          <Link
            to={`/static/asset/${movie.id}`}
            style={{ textDecoration: "none" }}
            key={`id_${movie.title}`}
          >
            <Card>
              <img
                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                alt={`movieposter_${movie.id}`}
              />
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

export default MoviesByCategory;
