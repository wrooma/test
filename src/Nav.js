import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div class="image">
            <div class="container"> 
                <nav class="navigation">
                    <h2 class="icon icon-lab">Добро пожаловать в Гринатом!</h2>
                    <ul className="navlinks">
                        <Link to="/">
                            <li>Главная</li>
                        </Link>
                        <Link to="">
                            <li>План адаптации</li>
                        </Link>
                        <Link to="/form">
                            <li>что то</li>
                        </Link>
                        <Link to="/signin">
                            <li>Войти</li>
                        </Link>
                    </ul>                    
                </nav>
            </div> 
        </div>
                      
    )
}

export default Nav;