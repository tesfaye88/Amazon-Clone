import React,{useReducer} from 'react'
import {type} from './action.type'

// const [state, dispatch] = useReducer(reducer, initialState)
export const initialState={
    basket:[]
}
    export  const reducer=(state,action)=>
    {
    switch(action.type)
    {
        case type.ADD_TO_BASKET:
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
            default:
                    return state;

    }
    
   
  return (
    <div>
      
    </div>
  )
}


