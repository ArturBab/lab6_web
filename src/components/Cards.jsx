import React, {useState, useEffect, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {cleanup} from "@testing-library/react";
import {Card, Col, Row, Button, Spinner, CardGroup} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import {CartContext} from "../context/Context";
import Cart from "./cart/Cart";

const Cards = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getCards = async () => {
            setLoading(true);
            const response = await fetch("http://127.0.0.1:8000/cards");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getCards();
    }, []);

    const Globalstate = useContext(CartContext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);

    const Loading = () =>{
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList);
    }

    const Search = () => {
        const [filter, setFilter] = useState('');
        const quantity = 0;

        const searchText = (event) => {
            setFilter(event.target.value);
        }
        let cardSearch = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
        });
        return(
            <section className="py-4 container">
                <div className="row justify-content-center">

                    <div className="col-12 mb-5">
                        <div className="mb-3 col-4 mx-auto">
                            <label className="form-label h4">Найти товар</label>
                            <input
                                type="text"
                                className="form-control"
                                value={filter}
                                onChange={searchText.bind(this)}
                            />
                        </div>

                    </div>
                    {cardSearch.map((item, index) =>{
                        return(
                            <>
                                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key ={index}>
                                    <div className="card p-0 overflow-hidden h-100 shadow">
                                        <img src="" className="card-img-top"/>
                                        <div className="card-body">
                                            <h3 className="card-title">{item.brand}</h3>
                                            <h4 className="card-text">{item.line}</h4>
                                            <p className="card-text">Описание: {item.desc}</p>
                                            <h5 className="card-text">{item.price} руб.</h5>
                                            <div className="card-title">
                                                <Button onClick={() =>dispatch({type:'ADD',payload:item })}>
                                                    Добавить в корзину</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </section>
        )
    }

    return(
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">
                        Видеокарты
                    </h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <Search/>}
                <h2>---Корзина---</h2>
                    <Cart/>
            </div>
        </div>
    )
}

export default Cards;