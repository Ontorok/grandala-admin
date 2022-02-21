import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import Sidebar from './parts/sidebar/Sidebar';
import Topbar from './parts/topbar/Topbar';
import UserList from './parts/userList/UserList';

const App = function () {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </div>
      </Switch>
    </Router>

    // <div>
    //   <Topbar />
    //   <div className="container">
    //     <Sidebar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/users" element={<UserList />} />
    //       <Route path="/newUser" element={<NewUser />} />
    //       <Route path="/users/:userId" element={<User />} />
    //       <Route path="/products" element={<ProductList />} />
    //       <Route path="/product/:productId" element={<Product />} />
    //       <Route path="/newProduct" element={<NewProduct />} />
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default App;
