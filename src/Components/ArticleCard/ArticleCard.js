import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';

const ArticleCard = ( { image, title, byline, date, section}) => {
const month = `${date[5]}${date[6]}`;
const day = `${date[8]}${date[9]}`;
const year = date.slice(0, 4);

const capitalizedSection = section.charAt(0).toUpperCase() + section.slice(1)

    return (
        <Link to={`/${date}`} className='card-link'>
            <div className='card'>
                <h2 className='article-section'>{capitalizedSection}</h2>
                <img className='article-image' src={image} alt='corresponding article image' />
                <h2>{title}</h2>
                <p className='article-card-details'>{byline}</p>
                <p className='article-card-details'>Published: {`${month}/${day}/${year}`}</p>
            </div>
        </Link>
    )
}

export default ArticleCard;