import { useFetchGift } from '../hooks/useFetchGift';
import GiftGridItem from './GiftGridItem';

const GiftList =  ( { categorie } ) => {


    const {data: images, loading } = useFetchGift( categorie );

    
    return(
        <>
            { loading && <p>Cargando...</p>}
            <h2 className='animate__animated animate__bounce'>
                { categorie }
            </h2>
            {<ul className='card-grid '>
                {images.map( img =>
                    <GiftGridItem key={img.id} { ...img }/>
                )}
            </ul>}
        </>
    )
}

export default GiftList;