import React, { useContext } from 'react'
import './Cart.module.css'
import Layout from '../../LayOut/LayOut'
import { DataContext} from '../../DataProvider/DataProvider';
import ProductCard from '../../Product/ProductCard'
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)
  const total=basket.reduce((amount,item)=>(item.price * item.amount +amount),0)
  console.log(total)

  return ( 
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container} >
          <h2>Hello</h2>
          <h3>Your Shoping Market</h3>
          <hr />
          {
            basket?.length==0 ?(<p> opps ! no items in your cart </p>) : (basket?.map((item, i) => (
              //  return 
              <ProductCard 
              product={item}
                key={i}
                renderDes={true}
                flex={true}
                renderAdd={false}
              
              />
              
            )))
          }
        </div>
        {
          basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>subtotal ({basket?.length}items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span><input type="checkbox" />
                <small>this order contains a gift</small></span>
              <Link to="/payments">continue to checkout</Link>
            </div>
          )
        }

      </section>
    </Layout>

  )
}

export default Cart
