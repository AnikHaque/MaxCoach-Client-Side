import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navigation from './components/shared/Navigation';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/login/Login'
import AuthProvider from './context/authprovider/AuthProvider';
import AddService from './components/pages/addService/AddService'
import Register from './components/pages/login/register/Register'
import PrivateRoute from './components/pages/login/privateRoute/PrivateRoute';
import Services from './components/pages/services/Services';
import ProductDetail from '../src/components/pages/productDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
<Home></Home>
        </Route>
        <Route exact path="/home">
<Home></Home>
        </Route>
        <Route exact path="/courses">
<Services></Services>
</Route>
<PrivateRoute path="/coaching/:id">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
       
        <PrivateRoute exact path="/addservice">
<AddService></AddService>
        </PrivateRoute>
      
        <Route exact path="/login">
              <Login></Login>
              </Route>
        <Route exact path="/register">
              <Register></Register>
              </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
