import styled from 'styled-components';
import Topbar from "./components/Topbar";
import Menu from './components/Menu';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { useState } from 'react';

const Wrapper = styled.div`
    height: 100vh;
  `
const Sections = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    top: 70px;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 0px;
    }
    &>* {
      height: 100%;
      scroll-snap-align: start;
    }
  `


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <Wrapper>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sections>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </Sections>
    </Wrapper>
  );
}

export default App;
