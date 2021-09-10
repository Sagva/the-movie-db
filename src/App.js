import './App.css';
import HomePage from './pages/HomePage';
import  MovieContext from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieContext>
        <HomePage />
      </MovieContext>
    </div>
  );
}

export default App;
