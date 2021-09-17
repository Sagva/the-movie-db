import { createContext, useState, useEffect } from 'react'

export const SearchContext = createContext()

const SearchContextProvider = (props) => {

    const [searchValue, setSearchValue] = useState('')
    
    

    const values = {
        setSearchValue,
        searchValue
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;