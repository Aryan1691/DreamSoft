import './App.scss';
// The lazy keyword is used in React to enable lazy loading of components.
// When a component is marked as lazy, it will be loaded only when it is actually needed,
// i.e., when it is rendered in the application. This can help improve performance
// by reducing the initial load time of the application and loading components on-demand.
// Lazy loading is particularly useful for large or less frequently used components,
// as it allows the application to load and render essential components first,
// while deferring the loading of other components until they are required.

import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './styles/Navbar.scss';
import './styles/Loader.scss';
import './styles/HeroSection.scss';
import './styles/Service.scss';
import './styles/Project.scss';
import './styles/Experience.scss';
import './styles/Creator.scss';
import './styles/SecondService.scss';
import './styles/Reviews.scss';
import './styles/Blogs.scss';
import './styles/Footer.scss';
const LazyHeroSection = React.lazy(() => import('./components/HeroSection'));
const LazyService = lazy(() => import('./components/Service'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyExperience = lazy(() => import('./components/Experience'));
const LazyCreator = lazy(() => import('./components/Creator'));
const LazySecondService = lazy(() => import('./components/SecondService'));
const LazyReviews = lazy(() => import('./components/Reviews'));
const LazyBlogs = lazy(() => import('./components/Blogs'));
const LazyFooter = lazy(() => import('./components/Footer'));



function App() {
  return (
<div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <LazyHeroSection />
        <LazyService />
        <LazyProjects />
        <LazyExperience />
        <LazyCreator />
        <LazySecondService />
        <LazyReviews />
        <LazyBlogs />
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default App;
