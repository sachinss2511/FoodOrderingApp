import { useState  } from 'react';
import Header from './components/Layout/Header'
import React, { Fragment} from 'react'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown, setCartisShown] = useState(false)
  const showCartHandler = () =>{
    setCartisShown(true)
  }

  const hideCartHandler = () => {
    setCartisShown(false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClosing={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
          <Meals/>
      </main>
    </Fragment>
  );
}
export default App