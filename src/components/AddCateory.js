import React, { useState } from 'react';
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('new category here');

    const handleInputChange = (e) => {
        let value = e.target.value;
        setinputValue(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length < 2 || 
                    inputValue === "") {

            return false;
        }
        else{
    
            setCategories(cat => [inputValue, ...cat])
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>add Category</h2>
            <br/>
            <input type="text"
                    value={inputValue}
                    onChange={handleInputChange}>
            </input>
            <br/>
            <br/>
            <button type="submit" >ADD</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}

export default AddCategory;