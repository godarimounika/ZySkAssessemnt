import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import SocialproffSection from './components/SocialproffSection';
import FeatureSection from './components/FeatureSection';
import Newproject from './components/Newproject';
import CuttingEdge from './components/CuttingEdge';
import QuestionsSection from './components/QuestionsSection';
import Blog from './components/Blog';
import FreeTrail from './components/FreeTrail';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    
     <Herosection/>
     <SocialproffSection/>
     <FeatureSection/>
     <Newproject/>
<CuttingEdge/>
{/* <QuestionsSection/> */}
<Blog/>
<FreeTrail/>
<Footer/>

    </div>
  );
}

export default App;
