import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HistoryContext from './contexts/HistoryContext';
import MoviePage from './pages/MoviePage';
import PageNotFound from './pages/PageNotFound';
import ActorInfoPage from './pages/ActorInfoPage'
import Navigation from './components/Navigation'
import GenreListPage from './pages/GenreListPage'
import MoviesByGenrePage from './pages/MoviesByGenrePage';
import HistoryPage from './pages/HistoryPage';
import Footer from './components/Footer';
import { QueryParamProvider } from 'use-query-params'
import TopRated from './pages/TopRatedMovies';
import LatestMovies from './pages/LatestMovies';
import PopularMovies from './pages/PopularMovies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryParamProvider ReactRouterRoute={Route}>
          <HistoryContext>
            <Navigation />
            <Switch>
              <Route exact path="/top-rated">
                <TopRated />
              </Route>
              <Route exact path="/latest">
                <LatestMovies />
              </Route>
              <Route exact path="/popular">
                <PopularMovies />
              </Route>
              <Route exact path="/history">
                <HistoryPage />
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
              <Route exact path="/genre/:id">
                <MoviesByGenrePage />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
            <Footer />
          </HistoryContext>
        </QueryParamProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
