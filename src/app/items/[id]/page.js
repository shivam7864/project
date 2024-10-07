'use client'
import { useParams } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

export default function ItemDetail() {
//   const router = useRouter();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`) // Replace with your API URL
        .then(response => response.json())
        .then(data => setItem(data));
    }
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <img src={item.image} alt={item.title} className="w-52 h-64 object-cover justify-center rounded" />
        <h1 className="text-3xl text-black mt-4">{item.title}</h1>
        <p className="text-gray-700 mt-2">{item.description}</p>
      </div>
    </div>
  );
}
