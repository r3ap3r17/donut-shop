import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';

const Home = () => <div>Home</div>;
const AllProducts = () => <div>All Products</div>;
const Cart = () => <div>Cart <i class="fa-solid fa-cart-shopping"></i></div>;

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Main />
            </>
          }
        >
          <Route index element={ <Home /> } />
          <Route path="about" element={ <AllProducts /> } />
          <Route path="cart" element={ <Cart /> } />
          <Route path="*" element={ <>No Match</> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
