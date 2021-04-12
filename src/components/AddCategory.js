import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    // Para poder cambiar el cuadro de texto
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    // añadir categoria
    const handleSubmit = (e) => {
        e.preventDefault();// evitamos el submit del form
        if ( inputValue.trim().length > 1 ) {
            setCategories( categs => (categs.includes(inputValue)) ? categs: [ inputValue, ...categs, ] );
            setInputValue('');
        }

    };

    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
