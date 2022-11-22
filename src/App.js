import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Conatact'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testemonials/Testemonials'
import Services from './Components/Services/Services'
import GlobalStyle from './App.styled'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
