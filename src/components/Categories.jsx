import React from 'react';

function Categories() {
  const [activeItem, setActiveItem] = React.useState(0);

  const onClickCategory = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(0)} className={activeItem === 0 ? 'active' : ''}>
          All
        </li>
        <li onClick={() => onClickCategory(1)} className={activeItem === 1 ? 'active' : ''}>
          Meat
        </li>
        <li onClick={() => onClickCategory(2)} className={activeItem === 2 ? 'active' : ''}>
          Vegetarian
        </li>
        <li onClick={() => onClickCategory(3)} className={activeItem === 3 ? 'active' : ''}>
          Grill
        </li>
        <li onClick={() => onClickCategory(4)} className={activeItem === 4 ? 'active' : ''}>
          Spicy
        </li>
        <li onClick={() => onClickCategory(5)} className={activeItem === 5 ? 'active' : ''}>
          Covered
        </li>
      </ul>
    </div>
  );
}

export default Categories;
