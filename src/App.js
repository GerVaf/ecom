
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Products from "./component/Product/Products";
import Slide from "./component/Slide";
import Testimonials from "./component/Testimonial/Testimonials";
import Virtual from "./component/Virtual/Virtual"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slide/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
