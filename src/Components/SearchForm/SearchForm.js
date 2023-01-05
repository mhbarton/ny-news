import React, { useState, useEffect } from "react";
import './SearchForm.css';


const SearchForm = ({ onChange }) => {
    
    return (
        <div className='search-form-container'>
            <input
                className='search-container'
                type='search'
                placeholder= 'Search by Article Title'
                onChange={onChange}
            />
        </div>
    )
}

export default SearchForm;