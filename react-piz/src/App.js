import React from "react";
import './App.css';
import './scss/app.scss';
import Header from './Component/Header/Header'
import Categories from "./Component/Categories/Categories";
import Sort from "./Component/Sort/Sort";
import PizzaBlock from "./Component/PizzaBlock/PizzaBlock";
import pizzas from './assets/pizzas.json'

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
                <h2 className="content__title">Все пиццы</h2><br/>
                <div className="content__items">
                    {
                        pizzas.map((obj) => (
                            <PizzaBlock key={obj.id}
                                        title={obj.title}
                                        price={obj.price}
                                        imageUrl={obj.imageUrl}
                                        sizes={obj.sizes}
                                        types ={obj.types}
                        />))
                    }

                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
