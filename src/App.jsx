// In your AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Layout   from './components/Layout';
import WorkSeries from "./components/Project/WorkSeries.jsx"; // Make sure the path is correct
 // Make sure the path is correct
 import ScrollToTop from "./components/ScrollToTop";
import Contact from './pages/Contact.jsx';
import JoinUs from './pages/Join.jsx';
import DonationFlow from './components/donation/DonationFlow.jsx';



const AppRouter = () => {
  return (
    
    <Layout>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/WorkSeries" element={<WorkSeries />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/donation" element={<DonationFlow />} />
      {/* You might want to add ProjectCar to a specific route or include it in Home/Project */}
    </Routes>
    
    </Layout>
    
  );
};

export default AppRouter;