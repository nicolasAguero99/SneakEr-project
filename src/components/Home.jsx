
// Components
import Header from "./Header";
import Nav from "./Nav";
import SectionBestSeller from "./SectionBestSeller";
import SectionOurBrands from "./SectionOurBrands";
import SectionPresentation from "./SectionPresentation";
import Footer from "./Footer";

const Home = () => {

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <SectionBestSeller />
      <SectionOurBrands />
      <SectionPresentation />
      <Footer />
    </>
  )
}

export default Home