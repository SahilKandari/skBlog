'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for the category data
const CategoryContext = createContext();

// Custom hook to access the category data
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};

// CategoryProvider component
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the category data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/categories', {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Failed');
        }

        const data = await res.json();
        setCategory(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Provide the category data to the components
  return (
    <CategoryContext.Provider value={{ category, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};
