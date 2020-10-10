import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import FAQ from "../components/FAQ";
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
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
