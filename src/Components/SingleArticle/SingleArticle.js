import React from "react";
import './SingleArticle.css';

const SingleArticle = ({article}) => {

const month = `${article[0].published_date[5]}${article[0].published_date[6]}`;
const day = `${article[0].published_date[8]}${article[0].published_date[9]}`;
const year = article[0].published_date.slice(0, 4);

    return (
        <div className='single-article-container'>
            <div className= 'single-article-main-details'>
                <h1 className='single-article-title'>{article[0].title}</h1>
                <div className='single-article-mini-details'>
                    <h2 className='single-article-byline'>{article[0].byline}</h2>
                </div>
            </div>
            <div className='single-article-lower-container'>
                <div className='single-article-image-details'>
                    <img className="single-article-image" src={article[0].multimedia[1].url} alt="corresponding article image"/>
                    <p className='single-article-details'>{article[0].multimedia[1].caption}</p>
                </div>
                <div className='single-article-text'>
                    <p className='single-article-abstract'>{article[0].abstract}</p>
                    <p className='single-article-date'>Published: {`${month}/${day}/${year}`}</p>
                    <a className='single-article-short-url' href={article[0].short_url} target='_blank'>Click to read the full article</a>
                </div>
            </div>
        </div>
    )
}

export default SingleArticle;
