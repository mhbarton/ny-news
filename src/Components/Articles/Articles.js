import React from "react";
import './Articles.css'
import ArticleCard from '../ArticleCard/ArticleCard';


const Articles = ( { articles }) => {
    console.log('array of articles', articles)
    // let displayArticles 
    // if(articles === undefined){
    //     console.log('wait')

    // }else {
    const displayArticles = articles.map((article) => {
            return (
                <ArticleCard
                    image={article.multimedia[0].url}
                    title={article.title}
                    byline={article.byline}
                    date={article.published_date}
                />
            )   
        })

    return <div className='all-articles-container'> {displayArticles}</div>
};


export default Articles;