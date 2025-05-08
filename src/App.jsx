// In your AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import JoinUs from "./pages/JoinUs";
import Layout   from './components/Layout';
import WorkSeries from "./components/Project/WorkSeries.jsx"; // Make sure the path is correct
 // Make sure the path is correct
 import ScrollToTop from "./components/ScrollToTop";



const AppRouter = () => {
  return (
    
    <Layout>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/WorkSeries" element={<WorkSeries />} />
      {/* You might want to add ProjectCar to a specific route or include it in Home/Project */}
    </Routes>
    
    </Layout>
    
  );
};

export default AppRouter;