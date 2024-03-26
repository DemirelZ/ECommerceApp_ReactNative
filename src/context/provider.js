import React, {useState} from 'react';
import StoreContext from '.';

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addCart = product => {
    setCart([...cart, product]);
    console.log(cart);
  };
  return (
    <StoreContext.Provider
      value={{cart, setCart, addCart, isLogin, setIsLogin}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
