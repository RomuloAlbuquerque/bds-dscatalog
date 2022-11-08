import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "pages/Home"
import Catalog from "pages/Catalog"
import Admin from "pages/Admin"
import Navbar from "components/Navbar"
import ProductDetails from "components/ProductDetails"
import { product } from "util/mock"

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
                    <ProductDetails product={product}/>
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    )

    export default Routes