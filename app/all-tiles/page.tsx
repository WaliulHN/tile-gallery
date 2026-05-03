'use client';

import { useState } from 'react';
import Link from 'next/link';

const DUMMY_TILES = [
  { 
    id: 1, 
    name: "Marble White Classic", 
    price: 45, 
    category: "Marble", 
    image: "/images/marble-white.jpg" 
  },
  { 
    id: 2, 
    name: "Slate Dark Grey", 
    price: 35, 
    category: "Slate", 
    image: "/images/slate-grey.jpg" 
  },
  { 
    id: 3, 
    name: "Terracotta Rustic", 
    price: 28, 
    category: "Ceramic", 
    image: "/images/terracotta.jpg" 
  },
  { 
    id: 4, 
    name: "Ceramic Blue Ocean", 
    price: 50, 
    category: "Ceramic", 
    image: "/images/ceramic-blue.jpg" 
  },
  { 
    id: 5, 
    name: "Wood Oak Finish", 
    price: 65, 
    category: "Wood", 
    image: "/images/wood-oak.jpg" 
  },
  { 
    id: 6, 
    name: "Granite Speckled", 
    price: 80, 
    category: "Granite", 
    image: "/images/granite-speckled.jpg" 
  },
];
export default function AllTilesPage() {
  const [search, setSearch] = useState('');
  const filteredTiles = DUMMY_TILES.filter(tile => 
    tile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginBottom: '24px' }}>
          All Tiles
        </h1>
        
        <input
          type="text"
          placeholder="Search tiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '12px 16px',
            border: '2px solid #374151',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#1f2937',
            color: 'white',
            fontSize: '16px'
          }}
        />
      </div>

      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        padding: '32px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredTiles.map((tile) => (
          <div key={tile.id} style={{
            backgroundColor: '#1f2937',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s'
          }}>
            <Link href={`/tile/${tile.id}`}>
              <div style={{ position: 'relative', height: '200px' }}>
                <img 
                  src={tile.image} 
                  alt={tile.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  ${tile.price} / sqft
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>
                  {tile.name}
                </h2>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                  Category: {tile.category}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}