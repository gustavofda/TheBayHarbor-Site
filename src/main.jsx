import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Dexter2006 from './components/Dexter2006';
import Newblood from './components/Newblood';
import Originalsin from './components/Originalsin';
import Resurrection from './components/Resurrection';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dexter2006" element={<Dexter2006 />} />
                <Route path="/newblood" element={<Newblood />} />
                <Route path="/originalsin" element={<Originalsin />} />
                <Route path="/resurrection" element={<Resurrection />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
