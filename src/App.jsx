import './css/app.css';

import Attribution from './components/Attribution';
import CountDownTimer from './components/CountDownTimer';
import React from 'react';
import SocialLinks from './components/SocialLinks';

//importing styles

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
        <main>
          <h2>¿Cuántos días han pasado desde que el Deportivo Independiente Medellín fue campeón?</h2>
          <CountDownTimer />
        </main>
        <SocialLinks />
        <Attribution />
      </div>
    </div>
  );
};

export default App;
