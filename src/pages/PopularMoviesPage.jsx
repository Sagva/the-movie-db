import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getPopularMovies, getPopularForWeek } from '../serveces/API'
import RenderMovies from '../components/RenderMovies';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const PopularMoviesPage = () => {
    const [radioValue, setRadioValue] = useState(1);

    const radios = [
        { name: 'Popular for day', value: 1 },
        { name: 'Popular for week', value: 2 },
    ];

    const [popularDayMovies, setPopularDayMovies] = useState(null)
    const [popularWeekMovies, setPopularWeekMovies] = useState(null)

    const { data: popularDay, isError: errorPopularDay } = useQuery('popularDayMovies', getPopularMovies)
    const { data: popularWeek, isError: errorPopularWeek } = useQuery('popularWeekMovies', getPopularForWeek)

    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if (popularDay) {
            setPopularDayMovies(addPosterLink(popularDay.results))
        }
        if (popularWeek) {
            setPopularWeekMovies(addPosterLink(popularWeek.results))
        }
    }, [popularDay, popularWeek])

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Popular Movies</h2>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-dark' : 'outline-dark'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(+(e.currentTarget.value))}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            {radioValue === 1 && <RenderMovies movieList={popularDayMovies} errorMessage={errorPopularDay} />}
            {radioValue === 2 && <RenderMovies movieList={popularWeekMovies} errorMessage={errorPopularWeek} />}
        </div>
    )


}

export default PopularMoviesPage;