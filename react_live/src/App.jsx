import './Main.css';
import Menu from './Components/Header/Menu';
import FilterMain from './Components/Sample1/FilterMain'
import Example2 from './Components/Sample2/SearchMain';
import Example3 from './Components/Sample3/TodoMain'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Menu></Menu>
        <div className="main_container">
          <Switch>
              <Route exact path='/' component={FilterMain}></Route>
              <Route exact path='/Example2' component={Example2}></Route>
              <Route exact path='/Example3' component={Example3}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
