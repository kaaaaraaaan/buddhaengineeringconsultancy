import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Buddha Engineering Consultancy">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Services />
      <CTAOne />
      <CTATwo />
      <Pricing />
      <Testimonials />
      <Team />
      <VideoOne />
      <FAQ />
      <Contact />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;