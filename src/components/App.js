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
import { VideoCameraOutlined, EditOutlined, BookOutlined, SmileOutlined } from '@ant-design/icons';
import AlgorithmApp from './algorithm/AlgorithmApp';
import { Container } from 'react-bootstrap';
import ChristmasTree from './christmas-tree/ChristmasTree';
/**TODO:
 * 3. refactor movie search app, refactor reducer out
 * 3. add more functions, ranks system
 * 3. click and see more information
 * 3. create global spinner */
function App() {
  return (
    <div>
      <Container>
        <h1>Chang's React Practise App</h1>
        <Router>
          <div>
            <div className="menu-container">
              <Menu mode="horizontal">
              <Menu.Item icon={<SmileOutlined />} key="christmastree">
                  <Link to="/christmastree">Happy Christmas!</Link>
                </Menu.Item>
                <Menu.Item icon={<VideoCameraOutlined />} key="moviesearch">
                  <Link to="/moviesearch">Search Movie</Link>
                </Menu.Item>
                <Menu.Item icon={<EditOutlined />} key="todoappRedux">
                  <Link to="/todoapp">To do App with local Redux</Link>
                </Menu.Item>
                <Menu.Item icon={<BookOutlined />} key="algorithm">
                  <Link to="/algorithm">Algorithm</Link>
                </Menu.Item>
              </Menu>
            </div>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div className="main-content">
              <Switch>
                <Route exact path="/">
                  <ChristmasTree />
                </Route>
                <Route path="/christmastree">
                  <ChristmasTree />
                </Route>
                <Route path="/moviesearch">
                  <MovieSearchApp />
                </Route>
                <Route path="/todoapp">
                  <TodoApp />
                </Route>
                <Route path="/algorithm">
                  <AlgorithmApp />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Container>
    </div>
  );
}

export default App;
