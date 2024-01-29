import React from 'react'
const Product=({id,title,description,img,price,addfunction})=>
{
    return(
        <article className="mv-5 center bg-white br3 pa3 pa4-n8 mv3 ba b-black-10" id={id}>
            <div className="tc">
                <img src={img} class="br-100 h4 w4 dib ba b-black-05 pa2" title={title}></img>
                <h1 className="f3 mb2">{title}</h1>
                <h2 className="f5 fw4 gray mt0">{description}</h2>
                <button className="f6 link dim bt3 ph3 pv2 mb2 dib white bg-dark-green ba">Add</button>
                <span>${price}</span>
            </div>
        </article>
    )
}
export default Product;