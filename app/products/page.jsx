import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Drone X1', img: '/drone1.png', description: 'High-tech drone with 4K camera.' },
  { id: 2, name: 'Drone Y2', img: '/drone2.png', description: 'Lightweight drone, long battery life.' },
  { id: 3, name: 'Drone Z3', img: '/drone3.png', description: 'Fast speed, equipped with GPS tracking.' },
];

export default function Products() {
  return (
<div className="bg-darkGrey flex flex-col justify-between items-center text-lightGrey min-h-screen">
  <Header />
  <main className="flex-grow p-4 md:p-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <img src={product.img} alt={product.name} className="h-48 md:h-64 w-full object-cover rounded-lg mb-4" />
          <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
          <p className="text-lightGrey mb-4">{product.description}</p>
          <button className="bg-lightGrey text-darkGrey py-2 px-4 rounded font-bold">Buy Now</button>
        </div>
      ))}
    </div>
  </main>
  <Footer />
</div>

  );
}
