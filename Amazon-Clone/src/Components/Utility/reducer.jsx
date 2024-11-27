import React from 'react'
import { type } from './action.type'
// const [state, dispatch] = useReducer(reducer, initialState)
export const initialState = {
  basket: []
}
export const reducer = (state, action) => {
  switch (action.type) {
      case type.ADD_TO_BASKET:
        const existingItem=state.basket.find((item)=>item.id===action.item.id)
        if(!existingItem)
        {
          return {
        ...state,
        basket: [...state.basket, {...action.item,amount:1}]
      }}
      else {
        const updateBasket=state.basket.map((item)=>{
          return item.id ===action.item.id ?{...item,amount:item.amount + 1}:item
        })
        return{
          ...state,basket:updateBasket
        }
      }
    default:
      return state;
  }
}


