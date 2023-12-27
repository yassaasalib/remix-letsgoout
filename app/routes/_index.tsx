// routes/index.tsx
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  );
};

export default Index;
