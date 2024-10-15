import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-darkGrey min-h-screen text-lightGrey">
      <Header />
      <main className="p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">About Us</h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          At Drone Store, we are committed to providing cutting-edge drone technology for every need. Whether you're a professional drone operator or an enthusiast, 
          we offer a wide range of drones designed for high performance, ease of use, and unmatched reliability.
        </p>
        <div className="mt-8 space-y-6 md:space-y-10">
          <div className="bg-mediumGrey p-6 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Story</h2>
            <p className="mt-2 text-sm md:text-base">
              Founded in 2010, Drone Store started with the vision of making aerial technology accessible to everyone. Over the years, we’ve grown into a leader in drone innovation.
            </p>
          </div>
          <div className="bg-mediumGrey p-6 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Products</h2>
            <p className="mt-2 text-sm md:text-base">
              We offer a variety of drones suitable for different needs, from recreational drones for beginners to advanced drones equipped with the latest features for professionals.
            </p>
          </div>
          <div className="bg-mediumGrey p-6 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Commitment</h2>
            <p className="mt-2 text-sm md:text-base">
              We are committed to customer satisfaction and ensuring our products meet the highest standards of quality, performance, and safety. 
              Every drone we sell undergoes rigorous testing before it reaches you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
