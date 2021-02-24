import React, { useState } from 'react';
import AddCategory from './components/AddCateory';
import GiftList from './components/GiftList';

const GiftExpertCard = ({ props })=>{


    const [categories, setCategories] = useState(['One Punch']);
    

    return(
        <>
            <h2>GiftExpertCard</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ul>
            {
                categories.map( cat => 
                     <GiftList key={ cat } categorie={ cat }/>       
                )
            }
            </ul>
            
        </>
    )
}

export default GiftExpertCard;
