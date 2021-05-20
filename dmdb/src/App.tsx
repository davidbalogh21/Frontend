import './App.css';
import {Navbar} from './components/navbar/Navbar'
import Genres from "./components/pages/Genres";
import MoviesByCategory from "./components/pages/MoviesByCategory"
import AssetDetails from "./components/pages/AssetDetails"
import Popular from "./components/pages/Popular"
import Home from "./components/pages/Home"
import { PopularProvider } from './components/contexts/PopularContext'
import {MenuProvider} from './components/contexts/MenuContext'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer"
import NotFound from "./components/pages/NotFound"

function App() {
  return (
    <MenuProvider>
    <PopularProvider>
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path = "/" exact component = {Home}/>
          <Route path = "/categories" exact component = {Genres}/>
          <Route path = "/popular"  exact component = {Popular}/>
          <Route path = "/static/movies/:id" exact component = {MoviesByCategory}/>
          <Route path = "/static/asset/:id" exact component = {AssetDetails}/>
          <Route component = {NotFound}/>
      </Switch>
      <Footer/>

    </div>
    </Router>
    </PopularProvider>
    </MenuProvider>
  );
}

export default App;
