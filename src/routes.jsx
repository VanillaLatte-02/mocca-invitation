
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import App from './App';
import Template1 from './template1/template1';
import { PageTransition } from './PageTransition';

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <App />
            </PageTransition>
          }
        />
        <Route
          path="/template1"
          element={
            <PageTransition>
              <Template1 />
            </PageTransition>
          }
        />
        {/* Add more routes here as needed */}
      </Routes>
    </AnimatePresence>
  );
}