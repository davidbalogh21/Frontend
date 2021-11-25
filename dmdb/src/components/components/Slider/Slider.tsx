import React, { useContext, useState } from 'react';
import { PopularContext } from '../../../contexts/PopularContext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import { Carousel, CarouselInner, Center, DescriptionText, Left, Right, TitleText } from './SliderStyles.css';
import { PopularInfo } from '../../../types/AssetTypes';


export default function Slider() {
	const [currentImage, setCurrentImage] = useState<number>(0);
	const popularMovies = useContext<PopularInfo[]>(PopularContext);

	const handleSliderClick = (forward: boolean) => {
		if ( forward ) {
			if ( currentImage >= popularMovies.length - 1 ) {
				setCurrentImage(0);
			} else {
				setCurrentImage(currentImage + 1);
			}
		} else if ( currentImage === 0 ) {
			setCurrentImage(popularMovies.length - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	return (
		<div>
			<Carousel>
				<CarouselInner
					backgroundPhoto={`linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(https://www.themoviedb.org/t/p/original/${popularMovies?.[currentImage]?.backdrop_path})`}>
					<Left onClick={() => {
						handleSliderClick(false);
					}}>
						<ArrowBackIosIcon style={{ fontSize: 30 }}/>
					</Left>
					<Center>
						<Link
							to={`/static/asset/${popularMovies?.[currentImage]?.id}`}
							style={{ textDecoration: 'none' }}
						>
							<TitleText>{popularMovies?.[currentImage]?.title ?? popularMovies?.[currentImage]?.name}</TitleText>
						</Link>
						<DescriptionText>
							Score: {popularMovies?.[currentImage]?.vote_average}{' '}
							<StarIcon style={{ fontSize: '2rem' }}/>
						</DescriptionText>
					</Center>
					<Right onClick={() => {
						handleSliderClick(true);
					}}>
						<ArrowForwardIosIcon style={{ fontSize: 30 }}/>
					</Right>
				</CarouselInner>
			</Carousel>
		</div>
	);
}