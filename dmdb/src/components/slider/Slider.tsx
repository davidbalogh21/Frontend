import React, { useState, useContext } from "react";
import { PopularContext, PopularInfo } from "../contexts/PopularContext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import {Carousel, CarouselInner, Left, Center, Right, DescriptionText, TitleText} from "../styles/SliderStyles"


export default function Slider() {
  const [currImg, setCurrImg] = useState<number>(0);
  const popularMovies = useContext<PopularInfo[]>(PopularContext);

  return (
    <div>
      <Carousel>
        <CarouselInner backgroundPhoto = {`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(https://www.themoviedb.org/t/p/original/${popularMovies?.[currImg]?.backdrop_path})`}>
          <Left
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }}/>
          </Left>
          <Center>
            <Link
              to={`/static/asset/${popularMovies?.[currImg]?.id}`}
              style={{ textDecoration: "none" }}
            >
              <TitleText>{popularMovies?.[currImg]?.title}</TitleText>
            </Link>
            <DescriptionText>
              Score: {popularMovies?.[currImg]?.vote_average}{" "}
              <StarIcon style={{ fontSize: "2rem" }} />
            </DescriptionText>
          </Center>
          <Right
            onClick={() => {
              currImg < popularMovies.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </Right>
        </CarouselInner>
      </Carousel>
    </div>
  );
}
