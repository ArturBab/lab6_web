import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Goods from "./Processors";
import Processors from "./Processors";
import Cards from "./Cards";
import Cart from "./cart/Cart";

const Home = () => {
    return(
        <div className="hero">
            <div className="card text-bg-dark text-white border-0">
                <img src="/assets/ivan-petrov-green.jpg" className="card-img" alt="Background"
                height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-around">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Интернет-магазин техники ООО "Реквием"</h5>
                        <p className="card-text">
                            Добро пожаловать!
                        </p>
                        </div>
                    </div>
            </div>
            <Processors/>
            <Cards/>
        </div>
    )
}

export default Home;