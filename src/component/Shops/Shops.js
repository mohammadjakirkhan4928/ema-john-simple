import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shops.css';

const Shops = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

 // browser refresh dewar por o cart dkanor jonno.......wow (very important)

     useEffect( () =>{
      const storedCart = getShoppingCart();
      const savedCart = [];

      for(const id in storedCart){
         const addedProduct = products.find(product=> product.id === id)
         if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity= quantity;
            savedCart.push(addedProduct);
         }
      }
      setCart(savedCart);
     },[products])


    const handleAddToCart = (pro) => {
         let newCart = [];
         const exixts = cart.find(product=> product.id === pro.id);
         if(!exixts){
            pro.quantity= 1;
            newCart = [...cart, pro];
         }
         else{
            const rest = cart.filter(product=> product.id !== pro.id)
            exixts.quantity = exixts.quantity + 1;
            newCart = [...rest, exixts];
         }

        setCart(newCart);
        addToDb(pro.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shops;