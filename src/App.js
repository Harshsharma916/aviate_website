import EmployersTestimonial from "./Components/EmployersTestimonial";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import JobseekersInfo from "./Components/JobseekersInfo";
import JobseekersTestimonial from "./Components/JobseekersTestimonial";
import Sponsors from "./Components/Sponsors";

function App() {
  return (
    <>
      <Header />
      <Intro/>
      <JobseekersInfo/>
      <JobseekersTestimonial/>
      <EmployersTestimonial/>
      <Sponsors/>
      <Footer/>
    </>
  );
}

export default App;
