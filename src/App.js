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
import TopRatedPage from './pages/TopRatedMoviesPage';
import LatestMoviesPage from './pages/LatestMoviesPage';
import PopularMoviesPage from './pages/PopularMoviesPage';
import SimilarMoviesPage from './pages/SimilarMoviesPage'
import SearchResultPage from './pages/SearchResultPage';
import SearchContext from './contexts/SearchContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchContext>
          <QueryParamProvider ReactRouterRoute={Route}>
            <HistoryContext>
              <Navigation />
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`}>
                  <TopRatedPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/top-rated`}>
                  <TopRatedPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/latest`}>
                  <LatestMoviesPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/popular`}>
                  <PopularMoviesPage />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/search-result`}>
                  <SearchResultPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/history`}>
                  <HistoryPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/movie/:id`}>
                  <MoviePage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/actor/:id`}>
                  <ActorInfoPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/genres`}>
                  <GenreListPage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/genre/:id`}>
                  <MoviesByGenrePage />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/simiral-movie/:id`}>
                  <SimilarMoviesPage />
                </Route>
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
              <Footer />
            </HistoryContext>
          </QueryParamProvider>
        </SearchContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
