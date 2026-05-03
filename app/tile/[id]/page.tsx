'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { toast } from 'react-hot-toast';

// DUMMY DATA - Same as All Tiles page
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



export default function TileDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tile, setTile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const found = DUMMY_TILES.find(t => t.id === Number(params.id));
    if (!found) {
      router.push('/all-tiles');
      return;
    }
    // @ts-ignore
    setTile(found);
    setIsLoading(false);
  }, [params.id, router]);

  const handleAddToCart = () => {
    if (!tile) return;
    
    const tileData: any = tile;
    
    addToCart({
      id: tileData.id,
      name: tileData.name,
      price: tileData.price,
      image: tileData.image
    });
    
    toast.success(`${tileData.name} added to cart! 🛒`);
  };


  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!tile) return null;


   return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li><Link href="/all-tiles" className="hover:text-primary">All Tiles</Link></li>
          <li className="text-primary">{tile.name}</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={tile.image} 
            alt={tile.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

 <div className="space-y-6">
          <div>
            <span className="badge badge-primary badge-lg mb-3">{tile.category}</span>
            <h1 className="text-4xl font-bold mb-2">{tile.name}</h1>
            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold text-primary">${tile.price}</p>
              <span className="text-base-content/60">/ sqft</span>
            </div>
          </div>

          <div className="divider"></div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-base-content/70 leading-relaxed">
              Premium quality {tile.category.toLowerCase()} tile perfect for residential and commercial spaces. 
              Durable, stylish, and easy to maintain. Available in multiple sizes and finishes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-base-content/70">
              <li>High durability & scratch resistant</li>
              <li>Waterproof & stain resistant</li>
              <li>Easy to clean & maintain</li>
              <li>Available in multiple sizes</li>
            </ul>
          </div>

          <div className="divider"></div>




           <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary btn-lg flex-1"
            >
              🛒 Add to Cart
            </button>
            <button className="btn btn-outline btn-lg flex-1">
              📞 Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}