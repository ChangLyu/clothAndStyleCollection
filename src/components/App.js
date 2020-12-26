import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu } from 'antd';
import MovieSearchApp from './moviesearch/MovieSearchApp';
import TodoApp from './todolist/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { VideoCameraOutlined, EditOutlined } from '@ant-design/icons';
/**TODO:
 * 3. refactor movie search app, refactor reducer out
 * 3. add more functions, ranks system
 * 3. click and see more information
 * 3. create global spinner */
function App() {
  return (
    <div>
      <h1>Chang's React Practise Website</h1>
      <Router>
        <div>
          <div className="menu-container">
            <Menu mode="horizontal">
              <Menu.Item icon={<VideoCameraOutlined />} key="moviesearch">
                <Link to="/moviesearch">Search Movie</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="todoapp">
                <Link to="/todoapp">To do App</Link>
              </Menu.Item>
            </Menu>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div className="main-content">
            <Switch>
              <Route path="/moviesearch">
                <MovieSearchApp />
              </Route>
              <Route path="/todoapp">
                <TodoApp />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
