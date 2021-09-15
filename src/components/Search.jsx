import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Search = () => {
    const { setSearch } = useContext(MovieContext)
    const [value, setValue] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        setSearch(value)
        setValue('')
    };

    return (

        <form onSubmit={handleSearchSubmit} className='my-4 py-2' style={{maxWidth: 1200}}>
            <input
                type="text"
                placeholder="Search for movies"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
        

    );
};

export default Search