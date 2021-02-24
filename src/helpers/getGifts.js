

export const getGifts = async ( categorie ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ categorie }&api_key=UHwqxsDHGC6Pg5mtF66MDUwnR763TNaF`;
        const resp = await fetch(URL);
        const { data } = await resp.json();
        const gifts = data.map( elem => ({

            id: elem.id,
            title: elem.title,  
            url: elem.images?.downsized_medium.url,
        }));
        
        return gifts;
}