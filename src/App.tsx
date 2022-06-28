import {Navbar} from './components/components/Navbar/Navbar';
import {PageCategories} from './components/pages/PageCategories/PageCategories';
import PageAssets from './components/pages/PageAssets/PageAssets';
import PageAssetDetails from './components/pages/PageAssetDetails/PageAssetDetails';
import PagePopular from './components/pages/PagePopular/PagePopular';
import PageHome from './components/pages/PageHome/PageHome';
import {PopularProvider} from './contexts/PopularContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/components/Footer/Footer';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import {PageLogin} from './components/pages/PageLogin/PageLogin';
import {PageReset} from "./components/pages/PageReset/PageReset";
import {PageForgot} from "./components/pages/PageForgot/PageForgot";
import {PageRegister} from "./components/pages/PageRegister/PageRegister";
import {PageProfile} from "./components/pages/PageProfile/PageProfile";
import {PageAddReview} from './components/pages/PageAddReview/PageAddReview';
import {UserProvider} from "./contexts/UserContext";
import {PageReview} from "./components/pages/PageReview/PageReview";
import {AuthProvider} from "./contexts/AuthContext";
import {PageProfileVisit} from "./components/pages/PageProfileVisit/PageProfileVisit";
import {PageSearch} from "./components/pages/PageSearch/PageSearch";
import {PageFeed} from "./components/pages/PageFeed/PageFeed";
import {LoadingProvider} from "./contexts/PageCategoriesLoadingContext";

function App() {
    return (
        <PopularProvider>
            <UserProvider>
                <AuthProvider>
                    <LoadingProvider>
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
                                    <Route path="/register" exact component={PageRegister}/>
                                    <Route path="/forgot" exact component={PageForgot}/>
                                    <Route path="/reset/:resetToken" exact component={PageReset}/>
                                    <Route path="/profile" exact component={PageProfile}/>
                                    <Route path="/static/asset/:id/review" exact component={PageAddReview}/>
                                    <Route path="/static/asset/:movie_id/review/:id" exact component={PageReview}/>
                                    <Route path="/profiles/:id" exact component={PageProfileVisit}/>
                                    <Route path="/search" exact component={PageSearch}/>
                                    <Route path="/feed/:type" exact component={PageFeed}/>
                                    <Route component={PageNotFound}/>
                                </Switch>
                                <Footer/>
                            </div>
                        </Router>
                    </LoadingProvider>
                </AuthProvider>
            </UserProvider>
        </PopularProvider>
    );
}

export default App;