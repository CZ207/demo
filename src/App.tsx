/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import History from './pages/History';
import Exhibition from './pages/Exhibition';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/history" element={<History />} />
        <Route path="/exhibition" element={<Exhibition />} />
      </Routes>
    </Router>
  );
}
