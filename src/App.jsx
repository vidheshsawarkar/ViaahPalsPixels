import CounterPage from './components/CounterPage';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import OurServices from './components/OurServices';
import VideoCarousel from './components/VideoCarousel';
import Videos from './components/Videos';


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <VideoCarousel />
      
      <OurServices />

      <div className='overflow-x-hidden py-10'>
        <Marquee />
      </div>

      <CounterPage />

      <Videos />

      <Footer />  

    </div>
  );
}

export default App