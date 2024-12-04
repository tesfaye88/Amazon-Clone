import React from 'react'
import classes from './Payment.module.css'
import Layout from '../../LayOut/LayOut'
import { useContext ,useState} from 'react'
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from '../../Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import {GridLoader} from 'react-spinners'


function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext)
  console.log('at user ', user)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0);
  const total = basket.reduce((amount, item) => (item.price * item.amount + amount), 0)
  const [cardError, setCardError] = useState(null) //  track any card-related errors
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    // e.preventDefault()
    // console.log(e);
    e?.error?.message? setCardError(e?.error?.message): setCardError("")
  };
  return (
    <Layout>
      <div>
      {/* {header} */}
      <div className={classes.payment__header}>
        checkout {(totalItem)} items
      </div>
      {/* {payment method} */}
      <section className={classes.payment}>
        {/* {address} */}
        <div className={classes.flex}>
          <h3>Delevery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>1300 court House</div>
            <div>Arlington, VA</div>
          </div>
        </div>
        <hr />
        {/* {product} */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
          {basket?.map((item,i) => (

              <ProductCard key={i} product={item} flex={true}  />)
            )}
            </div>
        </div>
        <hr />
        {/* {card form} */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
         {/* {form } */}
         <div className={classes.payment__card__container}>
          <div >
            <form action="">
                 {/* display card error message */}
            {cardError && ( <small style={{color:"red"}}>{cardError}</small>
                    )}
               <CardElement onChange={handleChange} />
            {/* price */}
            <div className={ classes.payment__price}>
              <div>
                <span style={{display: "flex", gap: "12px"}}>
                       <p>Total Order |</p> <CurrencyFormat amount={total} />{" "}
                       {/* Display total price */}
                 </span>  
                              
              </div>
              {/* Submit button to pay now */}
               <button type="submit">
                  </button> 

            </div>
              

            </form>
          </div>
         </div>

        </div>
      </section>
      </div>

    </Layout>


  )
}

export default Payment
