import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieSearchApp from './moviesearch/MovieSearchApp';
import TodoApp from './todolist/TodoApp';

/**TODO:
 * 1. use router to config different app
 * 2. add another movie search api
 * 3. refactor movie search app, refactor reducer out
 * 3. add more functions, ranks system
 * 3. click and see more information
 * 3. create global spinner */
function App() {
  return (
    <div>
      <h1>Header</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/moviesearch">Search Movie</Link>
              </li>
              <li>
                <Link to="/todoapp">To do App</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/moviesearch">
              <MovieSearchApp />
            </Route>
            <Route path="/todoapp">
              <TodoApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
