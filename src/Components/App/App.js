import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { fetchArticles } from '../../apiCalls';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';

function App() {

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

useEffect(() => {
  setLoading(true)
  fetchArticles('home')
  .then((response) => setArticles(response.results))
  .catch((error) => {
  setError(error);
});
setLoading(false)
}, []);

console.log('1', articles)
  return (
    <main className='app-container'>
      <Header />
      <Switch>
      {/* {loading === true && <p className="apple-loader-text"> Loading your sour apples...</p>} */}
        <Route exact path='/' render={() => <Articles articles={articles}/>} />
      </Switch>
    </main>
  );
}

export default App;
