import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList/MovieList';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import NewMovie from './pages/NewMovie/NewMovie';
import EditMovie from './pages/EditMovie/EditMovie';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => (
              <MovieDetails { ...props } />) }
          />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
