import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Footer from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <ChatWidget />
      <Toaster />
    </Router>
  );
}

export default App;