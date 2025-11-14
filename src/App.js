import './App.css';
import Header from './component/header';
import Banner from './component/Banner';
import Misson from './component/Ourmission';
import Core from './component/Corepillars';
import Gallery from './component/Gallery';
import Cricle from './component/Circle';
import Craft from './component/Craft';
import Challenges from './component/Challenges';
import Growth from './component/Growth'
import Community from './component/Community';
import Spotlight from './component/Spotlight';
import Motion from './component/Growth'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Misson />
      <Core />
      <Gallery />
      <Craft />
      <Cricle />
      <Challenges />
      <Growth />
      <Community />
      <Spotlight />
      {/* <Motion /> */}
      <Footer />
    </div>
  );
}

export default App;
