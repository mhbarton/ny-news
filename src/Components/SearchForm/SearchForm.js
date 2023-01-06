import React from "react";
import './SearchForm.css';

const SearchForm = ({ onChange, userSearch }) => {

const clearSearch = () => {
    userSearch('')
};
    return (
        <div className='search-form-container'>
            <form className='search-form'>
                <input
                    className='search-container'
                    type='search'
                    placeholder= '🔍 Search by Article Title'
                    onChange={onChange}
                />
                <button className='clear-btn' onClick={() => clearSearch()}>Clear</button>
            </form>
        </div>
    )
};

export default SearchForm;