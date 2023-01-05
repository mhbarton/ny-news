import React from "react";
import './SingleArticle.css';

const SingleArticle = ({article}) => {

const month = `${article[0].published_date[5]}${article[0].published_date[6]}`;
const day = `${article[0].published_date[8]}${article[0].published_date[9]}`;
const year = article[0].published_date.slice(0, 4);

    return (
        <div className='single-article-container'>
            <h1 className='single-article-title'>{article[0].title}</h1>
            <h2 className='single-article-details'>{article[0].byline}</h2>
            <p className='single-article-details'>Published: {`${month}/${day}/${year}`}</p>
            <img className="single-article-image" src={article[0].multimedia[1].url} alt="corresponding article image"/>
            <p className='single-article-details'>{article[0].multimedia[1].caption}</p>
            <p>{article[0].abstract}</p>
            <a className='single-article-short-url' href={article[0].short_url}>Click to read the full article</a>
        </div>
    )
}

export default SingleArticle;
