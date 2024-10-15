import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-600 relative bottom-0  text-white py-10 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Drone Company</h2>
          <p className="text-gray-400">Innovating the skies.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <Link href="/" className="hover:text-gray-300 transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition duration-200">About Us</Link>
          <Link href="/products" className="hover:text-gray-300 transition duration-200">Products</Link>
          <Link href="/mission" className="hover:text-gray-300 transition duration-200">Mission</Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-400">© 2024 Drone Company. All rights reserved.</p>
      </div>
    </footer>
    
    );
  }
  