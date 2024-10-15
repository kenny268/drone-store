import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="bg-darkGrey flex flex-col justify-between items-center text-lightGrey min-h-screen">
      <Header />
      <main className=" flex-grow p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center ">Contact Us</h1>
        <form className="space-y-4 max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <input type="text" className="w-full p-3 bg-mediumGrey text-lightGrey border border-lightGrey rounded focus:outline-none" placeholder="Your Name" />
          <input type="email" className="w-full p-3 bg-mediumGrey text-lightGrey border border-lightGrey rounded focus:outline-none" placeholder="Your Email" />
          <textarea className="w-full p-3 bg-mediumGrey text-lightGrey border border-lightGrey rounded focus:outline-none" placeholder="Your Message" />
          <button className="bg-lightGrey text-darkGrey py-2 px-4 rounded font-bold w-full">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
