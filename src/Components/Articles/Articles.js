import React from "react";
import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard';


const Articles = ( { articles }) => {
    console.log('array of articles', articles)
    const displayArticles = articles.map((article) => {
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

    return <div className='all-articles-container'> {displayArticles}</div>
};


export default Articles;