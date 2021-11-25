import { Navbar } from './components/components/Navbar/Navbar';
import PageCategories from './components/pages/PageGenre/PageCategories';
import PageAssets from './components/pages/PageAssets/PageAssets';
import PageAssetDetails from './components/pages/PageAssetDetails/PageAssetDetails';
import PagePopular from './components/pages/PagePopular/PagePopular';
import PageHome from './components/pages/PageHome/PageHome';
import { PopularProvider } from './contexts/PopularContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/components/Footer/Footer';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import { PageLogin } from './components/pages/PageLogin/PageLogin';

function App() {
	return (
		<PopularProvider>
			<Router>
				<div className="App">
					<Navbar/>
					<Switch>
						<Route path="/" exact component={PageHome}/>
						<Route path="/categories" exact component={PageCategories}/>
						<Route path="/popular" exact component={PagePopular}/>
						<Route path="/static/movies/:id" exact component={PageAssets}/>
						<Route path="/static/asset/:id" exact component={PageAssetDetails}/>
						<Route path="/login" exact component={PageLogin}/>
						<Route component={PageNotFound}/>
					</Switch>
					<Footer/>
				</div>
			</Router>
		</PopularProvider>
	);
}

export default App;