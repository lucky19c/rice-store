import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const existing = cart.find(
      item => item.product_id === product.product_id
    );

    if(existing){

      setCart(

        cart.map(item =>

          item.product_id===product.product_id

          ? {
              ...item,
              quantity:item.quantity+1
            }

          : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity:1
        }
      ]);

    }

  };


  const decreaseQuantity=(productId)=>{

    setCart(

      cart.flatMap(item=>{

        if(item.product_id!==productId){
          return item;
        }

        if(item.quantity>1){

          return{
            ...item,
            quantity:item.quantity-1
          };

        }

        return [];

      })

    );

  };


  const removeProduct=(productId)=>{

    setCart(

      cart.filter(
        item=>item.product_id!==productId
      )

    );

  };


  const clearCart=()=>{

    setCart([]);

  };


  return(

    <CartContext.Provider
    value={{

      cart,
      addToCart,
      decreaseQuantity,
      removeProduct,
      clearCart

    }}
    >

      {children}

    </CartContext.Provider>

  );

};