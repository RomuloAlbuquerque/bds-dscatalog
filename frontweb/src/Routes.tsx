import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "pages/Home"
import Catalog from "pages/Catalog"
import Admin from "pages/Admin"
import Navbar from "components/Navbar"
import ProductDetails from "components/ProductDetails"

const Routes = () =>(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <Catalog />
                </Route>
                <Route path="/products/:productid">
                    <ProductDetails />
                </Route>
                <Redirect from="/admin" to="/admin/products" exact/>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    )

    export default Routes