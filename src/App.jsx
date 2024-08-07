import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits';
import Button from './components/button'
import Collabarition from './components/Collabarition';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Services from './components/Services';
import Foter from './components/Footer';
const  App = () => {
  return(
  <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
     <Header />
     <Hero />
     <Benefits />
     <Collabarition />
     <Services />
     <Pricing />
     <Roadmap />
     <Foter />
    </div>  
    <ButtonGradient />
  </>
  );
};
export default App