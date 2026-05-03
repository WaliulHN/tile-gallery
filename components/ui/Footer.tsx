import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-primary">TilesGallery</h3>
            <p className="text-sm text-base-content/70">Premium tiles for your dream home</p>
          </div>
          
          <div className="flex gap-6">
            <Link href="/" className="link link-hover">Home</Link>
            <Link href="/all-tiles" className="link link-hover">All Tiles</Link>
          </div>
          
          <div className="text-sm text-base-content/60">
            © {new Date().getFullYear()} TilesGallery. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}