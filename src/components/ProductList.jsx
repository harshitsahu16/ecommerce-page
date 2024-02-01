import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 h-[130px] w-[200px] hover:bg-slate-100">
          <p className="font-semibold text-lg mb-2">{product.name}</p>
          <p className="text-gray-600 ">{product.category}</p>
          <p className="text-green-600 mt-1">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
