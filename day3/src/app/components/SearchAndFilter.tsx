import React, { useState } from 'react';

interface SearchAndFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    onFilter(filtered);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md"
      >
        <option value="">All Categories</option>
        {[...new Set(products.map(product => product.category))].map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Price Range Dropdown */}
      <select
        value={priceRange}
        onChange={e => setPriceRange(e.target.value)}
        className="w-full mb-4 p-2 border rounded-md"
      >
        <option value="">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-200">$100 - $200</option>
        <option value="200-500">$200 - $500</option>
        <option value="500-1000">$500 - $1000</option>
      </select>

      {/* Apply Filters Button */}
      <button
        onClick={handleFilter}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SearchAndFilter;
