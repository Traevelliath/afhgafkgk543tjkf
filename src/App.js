import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavigationComponent from "./routes/navigation/navigation.component";
import ShopComponent from "./routes/shop/shop.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";
import CheckoutComponent from './routes/checkout/checkout.component';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<NavigationComponent />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<ShopComponent />} />
                <Route path='auth' element={<AuthenticationComponent />} />
                <Route path='checkout' element={<CheckoutComponent />} />
            </Route>
        </Routes>
)
}

export default App;
