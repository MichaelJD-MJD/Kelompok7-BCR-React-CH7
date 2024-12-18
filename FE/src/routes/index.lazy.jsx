import { createLazyFileRoute } from "@tanstack/react-router";
import "../styles/list-car.css";
import WhyUs from "../components/User/WhyUs/WhysUs";
import Header from "../components/User/Header/Header";
import Testimonial from "../components/User/Testimonial/Testimonial";
import OurServices from "../components/User/OurServices/OurServices";
import Banner from "../components/User/Banner/Banner";
import Faq from "../components/User/FAQ/Faq";
import Footer from "../components/User/Footer/Footer";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="pt-20">
      <Header />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
      <Footer />
    </div>
  );
}
