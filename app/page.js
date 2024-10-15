import Header from './components/Header';
import Footer from './components/Footer';
import ProductSlider from './components/ProductSlider';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-darkGrey min-h-screen text-lightGrey">
      <Header />
      <main className="flex flex-col items-center h-screen">
        <section className="bg-mediumGrey w-full p-8 text-center">
          {/* <p className="mt-4 text-sm md:text-lg max-sm:hidden">Discover the best drones for all your needs.</p> */}
        </section>
        <div className='flex w-full items-start max-sm:items-center justify-around max-sm:flex-col relative'>
          <div className='w-2/6 max-sm:w-5/6'>
            <h1 className='text-4xl mb-6 text-slate-200 font-semibold w-1/2 max-sm:w-5/6 text-center'>3D MODELING SERVICE</h1>
            <hr className="w-1/2 border-1 mb-6 border-blue-400 max-sm:mx-auto"/>
            <h2 className='text-2xl max-sm:text-xl text-slate-300 font-light'>
            Collect photogrammetric imagery and create affordable 3D models of any terrain. Capture the location of interest from every possible angle.
            </h2>
            <div className='max-sm:hidden'>
            <p className='my-3 text-l text-slate-200 font-thin'>Mile High Drones provides an affordable 3D mapping and modeling service with Unmanned Aerial Vehicles. Before drones, getting a 3D model and a 3D map was outright expensive and hard to accomplish due to terrain and logistic issues. It used to take weeks or months for even the smallest areas, but with Mile High Drones, you can get the 3D modeling service in a matter of days. Drones provide convenience, quick turnarounds, and not to mention the affordability of 3D modeling.</p>
            <p className='my-3 text-l text-slate-200 font-thin'>Cutting edge technology, thousands of High Definition photos and multiple flights ensure the precision of the 3D model. We can even export imagery as video animations you can use for commercial or promotional purposes. Our 3D drone mapping renders can be imported into CAD programs, as well.</p>
            <p className='my-3 text-l text-slate-200 font-thin'>Get highly accurate and affordable 3D models that will make any construction and engineering project a breeze.</p>
            </div>
          </div>
        <section className="max-sm:mb-10 h-auto md:my-10 w-3/6 max-sm:w-5/6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-6">Our Products</h2>
          <ProductSlider />
        </section>

        </div>
   
      </main>
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Cliff-Shadows-Ortho.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-600 opacity-70"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <Image
          src='/drone.png'
          width={600}
          height={700}
          className='animate-float' // Use the custom animation class
          alt='drone'
        />
      </section>

      <section className="bg-[url('/aerial.jpeg')] h-screen flex flex-col items-center justify-around ">
        <h1 className='text-5xl font-medium space-y-3 text-gray-50 font-serif'>INNOVATIVE DESIGN</h1>
        <Image
          src='/dr39.png'
          width={700}
          height={600}
          className='animate-float' // Use the custom animation class
          alt='drone'
        />
      </section>


      <Footer />
    </div>
  );
}
