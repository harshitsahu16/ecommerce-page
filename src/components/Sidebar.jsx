import React, { useState } from 'react';

const Sidebar = ({ onFilterChange, onSortChange }) => {
  const [filterOptionsVisible, setFilterOptionsVisible] = useState(false);
  const [sortOptionsVisible, setSortOptionsVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState(null);

  const toggleFilterOptions = () => {
    setFilterOptionsVisible(!filterOptionsVisible);
  };

  const toggleSortOptions = () => {
    setSortOptionsVisible(!sortOptionsVisible);
  };

  const handleFilterChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSortChange = (option) => {
    setSelectedSortOption(option);
    onSortChange(option);
  };

  return (
    <div className="bg-gray-200 p-4 border-r-2 border-gray-300 w-44 flex flex-col">
      <button
        className="mb-5 p-2 w-full text-left text-xl rounded-md focus:outline-none hover:text-slate-900 hover:bg-gray-400"
        onClick={toggleFilterOptions}
      >
        Filter
      </button>
      {filterOptionsVisible && (
        <div className="ml-5">
          <label className="block mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes('Electronics')}
              onChange={() => handleFilterChange('Electronics')}
            />
            Electronics
          </label>
          <label className="block mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes('Clothing')}
              onChange={() => handleFilterChange('Clothing')}
            />
            Clothing
          </label>
          <label className="block mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes('Books')}
              onChange={() => handleFilterChange('Books')}
            />
            Books
          </label>
          <label className="block mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes('Jewelry')}
              onChange={() => handleFilterChange('Jewelry')}
            />
            Jewelry
          </label>
          <label className="block mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes('FoodItems')}
              onChange={() => handleFilterChange('FoodItems')}
            />
            FoodItems
          </label> 
          <label className="block mb-1">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedFilters.includes('Shoes')}
              onChange={() => handleFilterChange('Shoes')}
            />
            Shoes
          </label>
        </div>
      )}

      <button
        className="mb-2 p-2 w-full text-xl text-left rounded-md hover:text-slate-900 hover:bg-gray-400 focus:outline-none"
        onClick={toggleSortOptions}
      >
        Sort
      </button>
      {sortOptionsVisible && (
        <div className="ml-2">
          <label className="block mb-2">
            <input
              type="radio"
              name="sort"
              className="mr-1"
              checked={selectedSortOption === 'lowToHigh'}
              onChange={() => handleSortChange('lowToHigh')}
            />
            Price: Low to High
          </label>
          <label className="block">
            <input
              type="radio"
              name="sort"
              className="mr-1"
              checked={selectedSortOption === 'highToLow'}
              onChange={() => handleSortChange('highToLow')}
            />
            Price: High to Low
          </label>
        </div>
      )}
       <h2 className="mt-auto text-lg text-center font-bold text-gray-600">Made By Harshit</h2>
    </div>
  );
};

export default Sidebar;
