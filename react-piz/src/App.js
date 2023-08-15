import React from "react";
import './App.css';
import './scss/app.scss';
import Header from './Component/Header/Header'
import Categories from "./Component/Categories/Categories";
import Sort from "./Component/Sort/Sort";
import PizzaBlock from "./Component/PizzaBlock/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <PizzaBlock/>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
