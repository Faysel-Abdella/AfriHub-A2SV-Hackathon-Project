
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HomeComponent/Hero";
import Features from "../components/HomeComponent/Features";
import Description from "../components/HomeComponent/Description";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Description />
      <div className="my-5 py-5">.</div>
      <Footer />
    </>
  );
};
export default HomePage;
