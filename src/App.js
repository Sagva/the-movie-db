import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieContext from './contexts/MovieContext';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PageNotFound from './pages/PageNotFound';
import ActorInfoPage from './pages/ActorInfoPage'
import Navigation from './components/Navigation'
import GenreListPage from './pages/GenreListPage'

function App() {
  return (
    <div className="App">
      <MovieContext>
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movie/:id">
              <MoviePage />
            </Route>
            <Route exact path="/actor/:id">
              <ActorInfoPage />
            </Route>
            <Route exact path="/genres">
              <GenreListPage />
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
