import React, {useReducer} from "react";
import { createContext } from "react";
import templateFactory from "bootstrap/js/src/util/template-factory";

export const CartContext = createContext();

export const Context = (props) =>{

    const reducer = (state, action) =>{
        switch (action.type){
            case 'ADD':
                const temstate = state.filter((item)=>action.payload.id===item.id)

                    if(temstate.length > 0){
                        return state
                    }
                    else{
                        return [...state, action.payload];
                    }
            case 'INCREASE':
                const temstate1 = state.map((item)=>{
                    if(item.id===action.payload.id)
                    {
                       return {...item, quantity: item.quantity+1}
                    }
                    else{
                        return item
                    }
                });
                    return  temstate1;
            case 'DECREASE':
                const temstate2 = state.map((item)=>{
                    if(item.id===action.payload.id)
                    {
                        return {...item, quantity: item.quantity-1}
                    }
                    else{
                        return item
                    }
                });
                return  temstate2;
            case 'REMOVE':
                const temstate3 = state.filter((item)=>item.id!==action.payload.id);
                return  temstate3;

                default:
                    return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, [])
    const info={state, dispatch};
    return(
        <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
    );
};