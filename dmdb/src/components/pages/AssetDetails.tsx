import React, {useState, useEffect} from 'react';
import Modal from '../modal/Modal';
import Loader from 'react-loader-spinner';
import {RouteComponentProps} from 'react-router';

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
} from '../styles/AssetStyles';
import {ActorInfo, CompanyInfo, MovieElements, VideoInfo} from '../../types/AssetTypes';

type TParams = { id: string };

function AssetDetails({match}: RouteComponentProps<TParams>) {
    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(
                `https://video-proxy.3rdy.tv/api/vod/asset/${match.params.id}`,
            );
            const movie = await data.json();
            setMovie(movie.data);
            setVideo(movie.data.videos.results);
            setCast(movie.data.credits.cast);
            setCompanies(movie.data.production_companies);
            setLoading(false);
        };
        fetchMovies();
    }, []);


    const [movie, setMovie] = useState<MovieElements>(Object);
    const [cast, setCast] = useState<ActorInfo[]>([]);
    const [companies, setCompanies] = useState<CompanyInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [video, setVideo] = useState<VideoInfo[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    return (
        <div>
            {loading ? (
                <Loader type="ThreeDots" color="#FF1D36" height="100" width="100"/>
            ) : null}
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
                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                        target="blank"
                    >
                        IMDB
                    </Button>
                    <Button
                        buttonColor="#FF1F00"
                        onClick={() => setModalIsOpen(!modalIsOpen)}
                    >
                        Youtube
                    </Button>
                    <Modal
                        onClose={() => setModalIsOpen(false)}
                        youtube={video}
                        show={modalIsOpen}
                    ></Modal>
                </TextBox>
            </Box>

            <ActorBox>
                <ImportantText>Cast: </ImportantText>

                {cast.slice(0, 10).map((actors) => (
                    <div key={`id_${actors.id}`}>
                        <ActorName>{actors.name}</ActorName>
                        {actors.profile_path ? (
                            <ActorPhoto
                                src={`https://www.themoviedb.org/t/p/original/${actors.profile_path}`}
                            />
                        ) : (
                            <ActorPhoto src="https://vulcanoilco.com/wp-content/uploads/person-placeholder.png"/>
                        )}
                    </div>
                ))}
            </ActorBox>

            <ActorBox>
                <ImportantText>Production companies: </ImportantText>

                {companies.map((company) => (
                    <div key={`id_${company.id}`}>
                        <ActorName>{company.name}</ActorName>
                        {company.logo_path ? (
                            <CompanyPhoto
                                src={`https://www.themoviedb.org/t/p/original/${company.logo_path}`}
                            />
                        ) : (
                            <CompanyPhoto src="https://wiki.dave.eu/images/4/47/Placeholder.png"/>
                        )}
                    </div>
                ))}
            </ActorBox>
        </div>
    );
}

export default AssetDetails;