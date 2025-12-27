import Header from './components/Header/Header';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const SearchCountry = lazy(() => import('./pages/SearchCountry'));
const Country = lazy(() => import('./pages/Country'));

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current location:', location);
  }, [location]);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
