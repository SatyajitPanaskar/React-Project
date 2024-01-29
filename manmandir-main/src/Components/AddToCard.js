import React from 'react'
import FooterComponents from './FooterComponents'
import HeaderComponent from './HeaderComponents'
const AddToCard=()=>
{
    return(
        <div>
            <HeaderComponent/>

           <section className="min-cart-section">
               <h1 style={{color:'red'}}>Shooping Card</h1>
              <div className="cart-items">
                  <div className="cart-items-container">
                      <div className="item-info">
                          <div className="product-img">
                              
                          </div>
                      </div>
                  </div>
              </div>

           </section>
        </div>
    )
}
export default AddToCard;