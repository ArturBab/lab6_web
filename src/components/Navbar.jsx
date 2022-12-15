import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FaShoppingCart } from "react-icons/fa";
import {Button} from "react-bootstrap";
import {CartProvider} from "react-use-cart";


const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="/home">PC SHOP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">На главную</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/processors">Процессоры</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cards">Видеокарты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">О нас</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Контакты</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in"></i> Войти</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus"></i> Зарегистрироваться</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;