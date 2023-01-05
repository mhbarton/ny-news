import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { fetchArticles } from '../../apiCalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import SingleArticle from '../SingleArticle/SingleArticle';
import SearchForm from '../SearchForm/SearchForm';

function App() {

const [articles, setArticles] = useState([]);
const [filteredArticles, setFilteredArticles] = useState([])
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

let location = useLocation()
const homeLink = location.pathname !== "/" && <Link data-cy="return-home-text" to="/">Return to Top Stories</Link>

const findArticle = (publishDate) => {
  return articles.filter((article) => {
    return article.published_date === publishDate
  });
};

const filterArticles = (userSearch) => {
  const search = articles.result
}

useEffect(() => {
  setLoading(true)
  fetchArticles('home')
  .then((response) => setArticles(response.results))
  .catch((error) => {
  setError(error);
});
setLoading(false)
}, []);

  return (
    <main className='app-container'>
      <Header />
      <div className='nav-links'>
        <h3 className='home-link-btn'>{homeLink}</h3>
      </div>
      <Switch>
      {/* {loading === true && <p className="apple-loader-text"> Loading your sour apples...</p>} */}
        <Route exact path='/:date' render={( {match} ) => {
          const chosenArticle = findArticle(match.params.date);
          return <SingleArticle article={chosenArticle}/> 
        }}
       />
        <Route exact path='/' render={() => (
          <div>
            <SearchForm />
            <Articles articles={articles}/>
          </div>
          )}
        />
      </Switch>
    </main>
  );
}

export default App;

