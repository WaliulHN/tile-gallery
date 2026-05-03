'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dummy data for tiles
const TILES = [
  { id: 1, name: "Marble White Classic", price: 45, category: "Marble", image: "/images/marble-white.jpg" },
  { id: 2, name: "Slate Dark Grey", price: 35, category: "Slate", image: "/images/slate-grey.jpg" },
  { id: 3, name: "Terracotta Rustic", price: 28, category: "Ceramic", image: "/images/terracotta.jpg" },
  { id: 4, name: "Ceramic Blue Ocean", price: 50, category: "Ceramic", image: "/images/ceramic-blue.jpg" },
  { id: 5, name: "Wood Oak Finish", price: 65, category: "Wood", image: "/images/wood-oak.jpg" },
  { id: 6, name: "Granite Speckled", price: 80, category: "Granite", image: "/images/granite-speckled.jpg" },
];

const CATEGORIES = ["All", "Marble", "Ceramic", "Granite", "Wood", "Slate"];

export default function AllTilesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Logic
  const filteredTiles = TILES.filter((tile) => {
    const matchesCategory = activeCategory === "All" || tile.category === activeCategory;
    const matchesSearch = tile.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Page Header */}
      <div style={{ 
        textAlign: 'center', 
        padding: '80px 20px 40px', 
        background: 'radial-gradient(circle at center, #1e293b 0%, #0a0a0a 100%)'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '800', 
          color: '#fff', 
          marginBottom: '16px',
          letterSpacing: '-1px'
        }}>
          Our <span style={{ color: '#14b8a6' }}>Collection</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Discover premium tiles crafted for elegance and durability.
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search tiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: '50px',
              border: '1px solid #334155',
              backgroundColor: '#1e293b',
              color: '#fff',
              fontSize: '16px',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#14b8a6'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#334155'}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '12px', 
        padding: '20px', 
        flexWrap: 'wrap',
        marginBottom: '60px'
      }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '10px 24px',
              borderRadius: '50px',
              border: activeCategory === cat ? '1px solid #14b8a6' : '1px solid #334155',
              backgroundColor: activeCategory === cat ? '#14b8a6' : 'transparent',
              color: activeCategory === cat ? '#fff' : '#94a3b8',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = '#14b8a6';
                e.currentTarget.style.color = '#14b8a6';
              }
            }}
            onMouseOut={(e) => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.color = '#94a3b8';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 24px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '32px'
      }}>
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <Link 
              key={tile.id} 
              href={`/tile/${tile.id}`}
              style={{ textDecoration: 'none', color: 'inherit', group: 'group' }}
              className="tile-card-link"
            >
              <div style={{
                backgroundColor: '#111111',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #1e293b',
                transition: 'all 0.4s ease',
                position: 'relative',
                height: '420px',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="tile-card"
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#14b8a6';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(20, 184, 166, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#1e293b';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                
                {/* Image Container */}
                <div style={{ 
                  height: '280px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  backgroundColor: '#1e293b' // Fallback color
                }}>
                  {/* Placeholder Image if real image fails */}
                  <img 
                    src={tile.image} 
                    alt={tile.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    className="tile-image"
                    // Note: In a real app, handle image errors
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/400x300/1e293b/94a3b8?text=Tile+Image';
                    }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} className="card-overlay">
                    <span style={{
                      backgroundColor: '#fff',
                      color: '#111',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '14px',
                      transform: 'translateY(20px)',
                      transition: 'transform 0.3s ease'
                    }} className="view-btn">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ 
                      fontSize: '12px', 
                      color: '#14b8a6', 
                      fontWeight: '600', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px' 
                    }}>
                      {tile.category}
                    </span>
                    <h3 style={{ 
                      fontSize: '20px', 
                      fontWeight: '700', 
                      color: '#fff', 
                      margin: '8px 0',
                      lineHeight: '1.3'
                    }}>
                      {tile.name}
                    </h3>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #1e293b'
                  }}>
                    <span style={{ 
                      fontSize: '22px', 
                      fontWeight: '700', 
                      color: '#14b8a6' 
                    }}>
                      ${tile.price}
                      <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '400' }}>/sqft</span>
                    </span>
                    <span style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid #334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94a3b8',
                      transition: 'all 0.3s ease'
                    }} className="arrow-icon">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Inline Styles for Hover Effects (since we can't use CSS classes easily in this format) */}
              <style>{`
                .tile-card-link:hover .tile-image {
                  transform: scale(1.05);
                }
                .tile-card-link:hover .card-overlay {
                  opacity: 1;
                }
                .tile-card-link:hover .view-btn {
                  transform: translateY(0);
                }
                .tile-card-link:hover .arrow-icon {
                  background-color: #14b8a6;
                  border-color: #14b8a6;
                  color: #fff;
                }
              `}</style>
            </Link>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px' }}>
            <p style={{ fontSize: '18px', color: '#64748b' }}>No tiles found matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchTerm(""); }}
              style={{ marginTop: '20px', padding: '10px 20px', background: '#14b8a6', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}