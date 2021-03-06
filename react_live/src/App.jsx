import './Main.css';
import Header from './Components/Header/Menu';
import TabsMain from './Components/Tabs/TabsMain'
import Example2 from './Components/SearchPage/SearchMain';
import Example3 from './Components/TodoPage/TodoMain'
import Example4 from './Components/Accordion/BoxItems'
import ShopingMain from './Components/ShopingCart/ShopingMain'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { DataToSendFun } from './Context/CartDataContext';
import ShopingCart from './Components/ShopingCart/ShopingCart';
function App() {
  return (
    <>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <DataToSendFun>
            <Header></Header>
            <div className="main_container">
              <Switch>
                  <Route exact path='/' component={Example3}></Route>
                  <Route exact path='/TabsMain' component={TabsMain}></Route>
                  <Route exact path='/SearchPage' component={Example2}></Route>
                  <Route exact path='/Accordion' component={Example4}></Route>
                  <Route exact path='/ShopingCart' component={ShopingMain}></Route>
              </Switch>
            </div>
            <ShopingCart />
        </DataToSendFun>
    </HashRouter>
    </>
  );
}

export default App;
