import React, { useState } from "react"
import './App.css'

export default function MobileFunction(props){

  const{image, mobileName, price} = props

  const [addToCartCounter, setAddItemToCartCounter] = useState(0)

  const availableInStock = 5;

  const addItemToCart = () => {
    if(addToCartCounter === 5){
      return alert('Stock limit reached!')
    }else{
      setAddItemToCartCounter(addToCartCounter + 1)
    }
  }

  const removeItemToCart = () => {
    if(addToCartCounter <= 0){
      return alert("Can't be less then 0!")
    }else{
      setAddItemToCartCounter(addToCartCounter - 1)
    }
  }
  return(
    <>
      <div class='main'>
        <div class="card">
          <img src={image} alt="mobilePhone"/>
          <p class="mobileName">{mobileName}</p>
          <p class="price">{price}</p>
          <p>Stock available - {availableInStock}</p>
          <p> Added to cart : {addToCartCounter}</p>
          <div class='cartButtons'>
          <button id="cartButtonsID" onClick={addItemToCart}>Add to cart</button>
          <button id="cartButtonsID" onClick={removeItemToCart}>Remove</button>
          </div>
        </div>
      </div>
    </>
  )
}
