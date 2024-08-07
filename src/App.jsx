import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./component/Benifits";
import Button from "./component/Button";
import Collaboration from "./component/Collaboration";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Pricing from "./component/Pricing";
import Roadmap from "./component/Roadmap";
import Services from "./component/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
      <Benifits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
};

export default App;
