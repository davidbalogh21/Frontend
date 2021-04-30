import React, { useState, useContext } from "react";
import styled from "styled-components";
import { PopularContext } from "../contexts/PopularContext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

const Carousel = styled.div`
  width: 100%;
  height: 91vh;
  background-color: black;
`;

const CarouselInner = styled.div`
  background-image: ${props => props.backgroundPhoto};
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

const Right = styled.div`
  flex: 5%;
  height: 100%;
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;
const Left = styled.div`
  flex: 5%;
  height: 100%;
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 80%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: justify;
  text-align-last: center;
`;

const TitleText = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: white;
`;

const DescriptionText = styled.p`
  font-size: 2rem;
  color: white;
`;

export default function Slider() {
  const [currImg, setCurrImg] = useState(0);
  const popularMovies = useContext(PopularContext);

  return (
    <div>
      <Carousel>
        <CarouselInner backgroundPhoto = {`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(https://www.themoviedb.org/t/p/original/${popularMovies?.[currImg]?.backdrop_path})`}>
          <Left
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </Left>
          <Center>
            <Link
              to={`/asset/${popularMovies?.[currImg]?.id}`}
              style={{ textDecoration: "none" }}
            >
              <TitleText>{popularMovies?.[currImg]?.title}</TitleText>
            </Link>
            <DescriptionText>
              Score: {popularMovies?.[currImg]?.vote_average}{" "}
              <StarIcon style={{ fontSize: 30 }} />
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
