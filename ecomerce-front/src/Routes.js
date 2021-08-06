import React from 'react'
import {BrowserRouter, Switch, Route } from "react-router-dom"
import Signin from "./user/Signin"
import Signup from "./user/Signup"
import Home from "./core/Home"
import Meni from "./core/Meni"
import PrivateRoute from "./Auth/PrivateRoute"
import Dashboard from "./user/UserDashboard"
import AdminRoute from "./Auth/AdminRoute"
import AdminDashboard from "./user/AdminDashboard"
import AddCategory from "./Admin/AddCategory"
import AddProduct from "./Admin/AddProduct"
import Shop from "./core/Shop"
import Product from "./core/Product"
import Cart from "./core/Cart"
const Routes=() => {

    return (
        <BrowserRouter>
        <Meni/>
        <Switch>
            <Route path= "/" exact component = {Home}/>
            <Route path="/shop" exact component = {Shop}/>
            <Route path= "/signin" exact component={Signin}/>
            <Route path= "/signup" exact component={Signup}/>
            <Route path ="/product/:productId" exact component={Product}/>
            <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
            
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoute path="/create/product" exact component={AddProduct}/>
            <AdminRoute path="/create/category" exact component={AddCategory}/>
          </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;
