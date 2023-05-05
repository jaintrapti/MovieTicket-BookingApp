import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import ShowList from "./components/ShowList";

function App() {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<ShowList />} />
     <Route path="/shows/:id" element={<ShowDetails />} />
    </Routes>
    </Router>
  );
}

export default App;


