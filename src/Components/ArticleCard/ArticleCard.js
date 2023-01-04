import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom';

const ArticleCard = ( { image, title, byline, date}) => {
    return (
        // <Link to={`/${id}`} className='card-link'>
        <div className='card'>
              <img className="article-image" src={image} alt="corresponding article image"/>
              <h2>{title}</h2>
              <p className='article-card-details'>{byline}</p>
              <p className='article-card-details'>{date}</p>
        </div>
    )
}

export default ArticleCard;