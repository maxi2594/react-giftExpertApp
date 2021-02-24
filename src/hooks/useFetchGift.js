import { getGifts } from "../helpers/getGifts";
const { useState, useEffect } = require("react");

export const useFetchGift = ( categorie ) => {

    const [state, setState ] = useState( {
        data: [],
        loading: true,
    })

    useEffect(()=>{
        getGifts(categorie)
            .then( imgs => (
                setState({
                    data: imgs,
                    loading: false,
                })
            ) );
    },[categorie])
    
    return state;
}