'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './components/SearchBar';
import ItemCard from './components/ItemCard';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') 
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  useEffect(() => {
    const filtered = items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items]);

  return (
    <div className="p-4">
      {/* <h1 className='text-blue-600 text-5xl'>KKKKKKK</h1> */}
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map(item => (
          <Link href={`/items/${item.id}`} key={item.id}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
