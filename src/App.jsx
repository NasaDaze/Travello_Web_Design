import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Card from "./components/CardSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <Divide /> */}
      {/* <div className="flex flex-row justify-between mx-5"></div> */}
      <Section1 />
      <Section2 />
      <div className="text-center d-flex justify-center mt-10 text-black">
        <h1 className="text-center mb-3 text-6xl font-bold">Recent Trips</h1>
        <p className="mb-10">
          You can discover unique destinations using Google Maps
        </p>
      </div>
      <Card />
      <div className="text-center d-flex justify-center mt-[100px] text-black">
        <h1 className="text-center mb-3 text-6xl font-bold">
          Don't wait. Start your journey now!
        </h1>
        <button className="mt-7 mb-[100px] btn btn-primary text-white">
          Plan your next destination here
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
