import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [totalPieces, setTotalPieces] = useState(0);

  return (
    <ProductContext.Provider value={{ selectedPhoto, setSelectedPhoto, totalPieces, setTotalPieces }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
