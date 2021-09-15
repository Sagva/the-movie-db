import { createContext, useState, useEffect } from 'react'

export const HistoryContext = createContext()

const HistoryContextProvider = (props) => {

    const [lastShownMovies, setLastShownMovies] = useState(JSON.parse(localStorage.getItem('lastShownMovies')) || [])
    const [isListChanged, setIsListChanged] = useState(false)

    const historyItemsLimit = 10

    useEffect(() => {
        if(isListChanged) {
            localStorage.setItem('lastShownMovies', JSON.stringify(lastShownMovies))
            setIsListChanged(false)
        }
    }, [isListChanged])

    const addLatestShownMovie = (movie) => {
        if (!lastShownMovies.includes(movie) && lastShownMovies.length < historyItemsLimit) {//if the movie is not in the list and amount of items in the list less than 10
            setLastShownMovies((prevState) => [movie, ...prevState]) //just add
            setIsListChanged(true)
        }
        else if (lastShownMovies.includes(movie)) { //if the movie is already in the list
            setLastShownMovies(lastShownMovies.filter((m) => m !== movie))//delete from the list
            setLastShownMovies((prevState) => [movie, ...prevState])//add again to the beginning, so the last visited movie is always in the beginning
            setIsListChanged(true)
        }
        else if (lastShownMovies.length === historyItemsLimit) {//if amount of items in the list equal 10 (we don't want to add more than 10)
            setLastShownMovies((lastShownMovies) => lastShownMovies.filter((oneMovie, index) => index !== lastShownMovies.length - 1))//delete the last one
            setLastShownMovies((prevState) => [movie, ...prevState])//add new to the begining
            setIsListChanged(true)
        }
        
    }


    const values = {
        addLatestShownMovie, //imported and used on MoviePage
        lastShownMovies      //imported and used on History
    }

    return (
        <HistoryContext.Provider value={values}>
            {props.children}
        </HistoryContext.Provider>
    );
}

export default HistoryContextProvider;