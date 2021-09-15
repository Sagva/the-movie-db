import { createContext, useState, useEffect } from 'react'

export const HistoryContext = createContext()

const HistoryContextProvider = (props) => {
    //getting data from LocalStorage 
    const [lastShownMovies, setLastShownMovies] = useState(JSON.parse(localStorage.getItem('lastShownMovies')) || []) //if there is data in LocalStorage take it there, otherwise use an empty array
    const historyItemsLimit = 10

    //saving data to LocalStorage
    const [isListChanged, setIsListChanged] = useState(false) 
    useEffect(() => { //as soon as the list of lastShownMovies is changed, put a new list to the LocalStorage
        if(isListChanged) {
            localStorage.setItem('lastShownMovies', JSON.stringify(lastShownMovies))
            setIsListChanged(false)
        }
    }, [isListChanged])

    const addLatestShownMovie = (movie) => {
        //check if the movie is already in the list
        let isMovieInList
        lastShownMovies.map(oneMovie => {
            if(oneMovie.id === movie.id){
                 isMovieInList = true
            } else {
                isMovieInList = false
            }
        })
        
        // if (!lastShownMovies.includes(movie) && lastShownMovies.length < historyItemsLimit)
        if (!isMovieInList && lastShownMovies.length < historyItemsLimit) {//if the movie is not in the list and amount of items in the list less than 10
            setLastShownMovies((prevState) => [movie, ...prevState]) //add movie
            setIsListChanged(true)
        }
        else if (isMovieInList) { //if the movie is already in the list
            setLastShownMovies(lastShownMovies.filter((m) => m.id !== movie.id))//delete from the list
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
        lastShownMovies      //imported and used on HistoryPage
    }

    return (
        <HistoryContext.Provider value={values}>
            {props.children}
        </HistoryContext.Provider>
    );
}

export default HistoryContextProvider;