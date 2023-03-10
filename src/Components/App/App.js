import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { fetchArticles } from '../../apiCalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import SingleArticle from '../SingleArticle/SingleArticle';
import SearchForm from '../SearchForm/SearchForm';
import Status404 from '../ErrorHandling/Status404/Status404';

function App() {

const [articles, setArticles] = useState([]);
const [userSearch, setUserSearch] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

let location = useLocation()
const homeLink = location.pathname !== "/" && <Link data-cy="return-home-text" to="/" onClick={() => clearSearch()}>Return to Top Stories</Link>


const clearSearch = () => {
  setUserSearch('')
}

const findArticle = (publishDate) => {
  return articles.filter((article) => {
    return article.published_date === publishDate
  });
};

const searchArticles = (event) => {
  const search = event.target.value.toLowerCase();
  setUserSearch(search);
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

useEffect(() => {
  const newSearchedArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(userSearch)
  );
  setSearchResults(newSearchedArticles);
}, [userSearch]);

  return (
    <main className='app-container'>
      <Header />
      <div className='nav-links'>
        <h3 className='home-link-btn'>{homeLink}</h3>
      </div>
      <Switch>
        <Route exact path='/:date' render={( {match} ) => {
          const chosenArticle = findArticle(match.params.date);
          return <SingleArticle article={chosenArticle}/> 
        }}
       />
        <Route exact path='/' render={() => (
          <div>
            <SearchForm onChange={searchArticles} userSearch={userSearch}/>
            <Articles articles={articles} userSearch={userSearch}/>
          </div>
          )}
        />
        <Route component={Status404} />
      </Switch>
    </main>
  );
}

export default App;

