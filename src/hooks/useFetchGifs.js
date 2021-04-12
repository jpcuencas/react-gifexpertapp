import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // que se ejecuta solo cuando se renderiza el componente
    // o cambia su dependencia (segundo argumento)
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            });

    }, [category]);

    return state; // { data:[], loading: true };


}


