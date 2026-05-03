import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About TilesGallery</h1>
        <p className="text-xl text-base-content/70">Premium quality tiles for every space in your home.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-base-content/70 leading-relaxed mb-6">
            At TilesGallery, we believe that every floor tells a story. Since 2020, we have been dedicated to bringing the finest selection of tiles to Bangladesh. From elegant marble to durable ceramics, our collection is curated to elevate your interior design.
          </p>
          <p className="text-base-content/70 leading-relaxed">
            We work directly with top manufacturers to ensure you get the best prices and quality. Whether you are renovating your kitchen or building a new home, we are your partner in creating beautiful spaces.
          </p>
        </div>
        
        {/* Image Placeholder */}
        <div className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-base-200 flex items-center justify-center">
            <p className="text-6xl"></p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          { label: 'Happy Customers', value: '5,000+' },
          { label: 'Tile Designs', value: '200+' },
          { label: 'Years Experience', value: '5+' },
          { label: 'Awards Won', value: '10' },
        ].map((stat, index) => (
          <div key={index} className="card bg-base-200 shadow-xl text-center p-6">
            <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
            <p className="font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <Link href="/all-tiles" className="btn btn-primary btn-lg px-8">
          Explore Our Collection
        </Link>
      </div>
    </div>
  );
}