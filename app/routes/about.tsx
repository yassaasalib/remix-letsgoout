// routes/about.tsx
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <About />
      </Main>
      <Footer />
    </div>
  );
};

export default AboutPage;
