import React, { useEffect, useState } from 'react';
import { Card, Title } from '../../styles/GridStyles.css';
import { FetchUrl } from '../../../types/Routing';
import { GenreTypes } from '../../../types/AssetTypes';
import CardPhoto from '../../components/Card/CardPhoto';
import {BackgroundContainer, CarouselWrapper, CategoryContainer} from './PageCategories.css';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function PageCategories() {
	useEffect(() => {
		fetchGenres().then(r => {
			console.log(r);
		});
	}, []);

	const [genres, setGenres] = useState<GenreTypes[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchGenres = async () => {
		const data = await fetch(FetchUrl.GENRES);
		const temp_genres = await data.json();
		setGenres(temp_genres.genres);
		setIsLoading(false);
	};

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};


	return (
		<>
			{isLoading ? (
				<>loading</>
			) : (
				<BackgroundContainer>
				<div>
					<Title>Categories</Title>
					<CategoryContainer>
						{genres.map((genre) => (
							<Link
								to={`/static/movies/${genre.id}`}
								style={{ textDecoration: 'none' }}
								key={`id_${genre.id}`}
							>
								<Card key={`id_${genre.id}`}>
									<CardPhoto id={genre.id} name={genre.name}/>
								</Card>
							</Link>
						))}
					</CategoryContainer>
				</div>
				</BackgroundContainer>
			)}
			<CarouselWrapper>
			<Carousel
				swipeable={false}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-100-px"
			>
				{genres.map((genre) => (
					<Link
						to={`/static/movies/${genre.id}`}
						style={{ textDecoration: 'none' }}
						key={`id_${genre.id}`}
					>
						<Card key={`id_${genre.id}`}>
							<CardPhoto id={genre.id} name={genre.name}/>
						</Card>
					</Link>
				))}
			</Carousel>
			</CarouselWrapper>
		</>
	);
}

export default PageCategories;