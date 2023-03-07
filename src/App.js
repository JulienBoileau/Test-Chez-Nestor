import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Logement from './components/logement';
import logementsData from './data/logementsdata';

// Appel de la fonction App pour l'organisation des routes vers chaque page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {logementsData.map(logement => (
          <Route key={logement.id} path={`/logementsData/${logement.id}`} element={<Logement logement={logement} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


