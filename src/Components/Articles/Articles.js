import React from "react";
import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard';


const Articles = ( { articles, userSearch }) => {
    console.log('array of articles', articles)
let displayArticles;
    if(userSearch !== ''){
        displayArticles = articles.filter((article) => article.title.toLowerCase().startsWith(userSearch))
    } else {
        displayArticles = articles
    }

    const articleData = displayArticles.map((article) => {
            return (
                <ArticleCard
                    key={article.uri}
                    id={article.uri}
                    image={article.multimedia[1].url}
                    title={article.title}
                    byline={article.byline}
                    date={article.published_date}
                    section={article.section}
                    caption={article.multimedia[1].caption}
                />
            )   
        })

    return (
        <div className='all-articles-container'> 
            {articleData.length ? articleData : <h3 className='search-error-message'>Oops! No matching articles found. Please try again!</h3>}
        </div>

    )
};


export default Articles;