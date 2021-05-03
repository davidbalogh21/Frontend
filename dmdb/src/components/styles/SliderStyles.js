import styled from "styled-components"


export const Carousel = styled.div`
width: 100%;
height: 91vh;
background-color: black;
`;

export const CarouselInner = styled.div`
background-image: ${props => props.backgroundPhoto};
height: 100%;
width: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
`;

export const Right = styled.div`
flex: 5%;
height: 100%;
display: grid;
place-items: center;
color: white;
cursor: pointer;
`;
export const Left = styled.div`
flex: 5%;
height: 100%;
display: grid;
place-items: center;
color: white;
cursor: pointer;
&:hover {
  font-size: 100px;
}
`;

export const Center = styled.div`
flex: 80%;
height: 100%;
display: grid;
place-items: center;
text-align: justify;
text-align-last: center;
`;

export const TitleText = styled.h1`
text-align: center;
font-size: 5rem;
color: white;
`;

export const DescriptionText = styled.p`
font-size: 2rem;
color: white;
`;
