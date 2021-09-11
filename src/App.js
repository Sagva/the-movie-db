import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieContext from './contexts/MovieContext';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <MovieContext>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movie/:id">
              <MoviePage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </MovieContext>
    </div>
  );
}

export default App;
