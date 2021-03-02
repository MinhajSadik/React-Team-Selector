import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';
import Cart from './Components/Cart/Cart';
import Promo from './Components/Flash/Flash';
import Footer from './Components/Footer/Footer';

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCartHandler = product => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <>
      <Header></Header>
      <Promo></Promo>
      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Players addToCartHandler={addToCartHandler}></Players>
            </div>
            <div className="col-lg-3">
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
