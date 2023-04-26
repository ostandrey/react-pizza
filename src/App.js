import Card from './components/Card';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';

import pizzas from './pizza.json';

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
          <h2 className="content__title">All pizza</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <Card {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
