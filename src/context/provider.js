import React, {useState} from 'react';
import StoreContext from '.';

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addCart = product => {
    setCart([...cart, product]);
    console.log(cart)
  };
  return (
    <StoreContext.Provider value={{cart, setCart, addCart}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
