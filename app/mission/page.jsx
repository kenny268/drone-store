import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Mission() {
  return (
    <div className="bg-darkGrey min-h-screen text-lightGrey">
      <Header />
      <main className="p-4 md:p-10 w-full flex flex-col justify-evenly items-center">
        <div className="bg-gray-800 lg:w-2/4 sm:w-4/5 p-6 rounded-sm shadow-lg text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">Our Mission</h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Our mission is to push the boundaries of drone technology, making it more accessible for professionals and enthusiasts alike. 
          We aim to improve aerial experiences by providing high-quality, reliable drones that enhance exploration, photography, and industrial applications.
        </p>
        </div>
        <div className="mt-8 space-y-6 md:space-y-10 w-full flex flex-col justify-evenly items-center">
          <div className="bg-gray-800 lg:w-2/4 sm:w-4/5 p-6 rounded-sm shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Innovation</h2>
            <p className="mt-2 text-sm md:text-base">
              We continuously innovate by integrating the latest technology in drone design and functionality. From GPS-enabled flight modes to advanced cameras, our drones are built to perform.
            </p>
          </div>
          <div className="bg-gray-800 lg:w-2/4 sm:w-4/5 p-6 rounded-sm shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Accessibility</h2>
            <p className="mt-2 text-sm md:text-base">
              Making drone technology easy to use for everyone, from hobbyists to industry professionals. Our goal is to democratize the skies and offer a seamless user experience.
            </p>
          </div>
          <div className="bg-gray-800 lg:w-2/4 sm:w-4/5 p-6 rounded-sm shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Sustainability</h2>
            <p className="mt-2 text-sm md:text-base">
              We are committed to reducing our environmental impact by building drones that are energy-efficient and built from recyclable materials wherever possible.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
