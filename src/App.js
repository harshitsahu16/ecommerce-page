import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

const App = () => {
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState(null);

  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const handleSortChange = (selectedSort) => {
    setSort(selectedSort);
  };

  const products = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: '$500' },
    { id: 2, name: 'T-shirt', category: 'Clothing', price: '$20' },
    { id: 3, name: 'Laptop', category: 'Electronics', price: '$1200' },
    { id: 4, name: 'Smartwatch', category: 'Electronics', price: '$150' },
    { id: 5, name: 'R.S Aggarwal', category: 'Books', price: '$15' },
    { id: 6, name: 'Ncert', category: 'Books', price: '$20' },
    { id: 7, name: 'Necklace', category: 'Jewelry', price: '$50' },
    { id: 8, name: 'Bracelet', category: 'Jewelry', price: '$30' },
    { id: 9, name: 'Pizza', category: 'FoodItems', price: '$10' },
    { id: 10, name: 'Burger', category: 'FoodItems', price: '$8' },
    { id: 11, name: 'Running Shoes', category: 'Shoes', price: '$80' },
    { id: 12, name: 'Casual Shoes', category: 'Shoes', price: '$60' },
    { id: 13, name: 'Charger', category: 'Electronics', price: '$50' },
    { id: 14, name: 'Jeans', category: 'Clothing', price: '$30' },
    { id: 15, name: 'Macbook', category: 'Electronics', price: '$2400' },
    { id: 16, name: 'SweatShirts', category: 'Clothing', price: '$150' },
    { id: 17, name: 'S Chand', category: 'Books', price: '$35' },
    { id: 18, name: 'Chemistry', category: 'Books', price: '$40' },
    { id: 19, name: 'Diamond Necklace', category: 'Jewelry', price: '$500' },
    { id: 20, name: 'Gold Bracelet', category: 'Jewelry', price: '$300' },
    { id: 21, name: 'Noodles', category: 'FoodItems', price: '$30' },
    { id: 22, name: 'Paneer', category: 'FoodItems', price: '$80' },
    { id: 23, name: 'Sports Shoes', category: 'Shoes', price: '$400' },
    { id: 24, name: 'Sneakers Shoes', category: 'Shoes', price: '$600' },
    { id: 25, name: 'Caps', category: 'Clothing', price: '$5' },
    { id: 26, name: 'Socks', category: 'Clothing', price: '$17' },
    { id: 27, name: 'R.D Sharma', category: 'Books', price: '$55' },
    { id: 28, name: 'Silver Chain', category: 'Jewelry', price: '$100' },
    { id: 29, name: 'Dosa', category: 'FoodItems', price: '$28' },
    { id: 30, name: 'Studs', category: 'Shoes', price: '$240' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow border-t-2 border-gray-200">
        <Sidebar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        <ProductList products={applyFiltersAndSort(products, filters, sort)} />
      </div>
    </div>
  );
};

const applyFiltersAndSort = (products, filters, sort) => {
  let filteredProducts = [...products];

  if (filters.length > 0) {
    filteredProducts = filteredProducts.filter((product) => filters.includes(product.category));
  }

  if (sort === 'lowToHigh') {
    filteredProducts.sort((a, b) => parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)));
  } else if (sort === 'highToLow') {
    filteredProducts.sort((a, b) => parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)));
  }

  return filteredProducts;
};

export default App;
