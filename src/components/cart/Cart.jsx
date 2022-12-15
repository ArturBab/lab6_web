import React, {useContext} from "react";
import './Cart.css';
import {CartContext} from "../../context/Context";
import {Button} from "react-bootstrap";

const Cart = () => {
    const Globalstate = useContext(CartContext);

    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const total = state.reduce((total, item)=>{

        return(total+item.price*item.quantity);

        },0);

    return (
        <div className="cart">
            {state.map((item, index)=>{
                return(
                    <div className="card" key={index}>
                        <h3 className="card-title">{item.brand}</h3>
                        <h4 className="card-text">{item.line}</h4>
                        <h5 className="card-text">{item.price} руб.</h5>
                        <h5>Сумма: {item.quantity*item.price} рублей</h5>
                        <div className="quantity">
                            <Button onClick={()=>dispatch({type:'INCREASE',payload:item})}>
                                <div className="fs-3"></div>
                                +
                            </Button>
                            <h4>Количество: {item.quantity} шт.</h4>
                            <Button onClick={()=> {
                                if (item.quantity > 1) {
                                    dispatch({type: 'DECREASE', payload: item});
                                }
                                else{
                                    dispatch({type: 'REMOVE', payload: item});
                                }
                            }}>
                                -
                            </Button>
                        </div>
                        <Button variant="danger" onClick={() => dispatch({type: 'REMOVE', payload: item})}>X</Button>
                    </div>
                )
            })}
            {state.length > 0 && <div className="total">
                <h2>
                    Итого: {total} рублей.
                </h2>
            </div> }
        </div>);
};

export default Cart;