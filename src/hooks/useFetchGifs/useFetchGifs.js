import {useState, useEffect} from 'react';
import {getGifs} from "../../helpers/getGifs/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]); // per si la categoria canviés (que no és el cas)

    return state;

}