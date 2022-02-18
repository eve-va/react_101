import {Link, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"

function App() {    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/products" element={<Products />}/>
                <Route path="/products/:productId" element={<ProductDetail />}/>
            </Routes>
        </div>
    )
}

export default App;
