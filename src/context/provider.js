import React, {useState} from 'react';
import StoreContext from '.';

const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(1);

  const [total, setTotal] = useState([]);
  const [sumEnd, setSumEnd] = useState(0);
  



  const addCart = product => {
    setCart([...cart, product]);
    
  };

  const sum = () => {
    
    const priceArr = cart?.map(product => (product.price));
    setTotal(priceArr);
    const summary=total.reduce((a, b)=> a+b,0)
    setSumEnd(summary)
  
  };


  return (
    <StoreContext.Provider
      value={{cart, setCart, addCart, isLogin, setIsLogin, count, setCount, sum, sumEnd}}>
      {children}
    </StoreContext.Provider>
  );
};

export default Provider;
