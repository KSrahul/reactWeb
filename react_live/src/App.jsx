import './Main.css';
import Menu from './Components/Header/Menu';
import FilterMain from './Components/FIlterPage/FilterMain'
import Example2 from './Components/SearchPage/SearchMain';
import Example3 from './Components/TodoPage/TodoMain'
import Example4 from './Components/Accordion/BoxItems'
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Menu></Menu>
        <div className="main_container">
          <Switch>
              <Route exact path='/' component={FilterMain}></Route>
              <Route exact path='/SearchPage' component={Example2}></Route>
              <Route exact path='/TodoPage' component={Example3}></Route>
              <Route exact path='/Accordion' component={Example4}></Route>
          </Switch>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
