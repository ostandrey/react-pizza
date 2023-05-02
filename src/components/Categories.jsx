import React from 'react';

const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Covered'];

function Categories() {
  const [activeItem, setActiveItem] = React.useState(0);

  const onClickCategory = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeItem === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
