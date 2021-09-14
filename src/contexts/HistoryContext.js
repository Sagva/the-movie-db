import {createContext, useState, useEffect} from 'react'

export const HistoryContext = createContext()

const HistoryContextProvider = (props) => {

    const [lastShownMovie, setLastShownMovie ] = useState([])
    

    const values = {
        setLastShownMovie
        
    }

    return ( 
        <HistoryContext.Provider value={values}>
            {props.children}
        </HistoryContext.Provider>
     );
}
 
export default HistoryContextProvider;