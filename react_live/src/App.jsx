import './Main.css';
import Menu from './Components/Header/Menu';
import FilterMain from './Components/Sample1/FilterMain'
import Example2 from './Components/Sample2/SearchMain';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <div className="main_container">
          <Switch>
              <Route exact path={"/"} component={FilterMain}></Route>
              <Route exact path={"/Example2"} component={Example2}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
