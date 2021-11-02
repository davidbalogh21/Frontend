import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CardPhoto from '../card/CardPhoto';
import Loader from 'react-loader-spinner';
import {Title} from '../styles/GridStyles';
import {CategoryContainer, Card} from '../styles/GenreStyles';
import {FetchUrl} from '../../types/Routing';
import {GenreTypes} from '../../types/AssetTypes';


function Genres() {
    useEffect(() => {
        fetchGenres();
    }, []);

    const [genres, setGenres] = useState<GenreTypes[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchGenres = async () => {
        const data = await fetch(FetchUrl.GENRES);
        const temp_genres = await data.json();
        setGenres(temp_genres.genres);
        setIsLoading(false);
    };


    return (
        <div>
            {isLoading ? (
                <Loader type="ThreeDots" color="#FF1D36" height="100" width="100"/>
            ) : null}
            <Title>Categories</Title>
            <CategoryContainer>
                {genres.map((allGenres) => (
                    <Link
                        to={`/static/movies/${allGenres.id}`}
                        style={{textDecoration: 'none'}}
                        key={`id_${allGenres.id}`}
                    >
                        <Card key={`id_${allGenres.id}`}>
                            <CardPhoto id={allGenres.id} name={allGenres.name}/>
                        </Card>
                    </Link>
                ))}
            </CategoryContainer>
        </div>
    );
}

export default Genres;