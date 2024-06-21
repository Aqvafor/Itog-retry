// import React from 'react';
// import Header from './components/header/Header';
// import Hero from './components/hero/Hero';
// import FeatureSection from './components/feature/FeatureSection';
// import Possible from './components/vozm/Possible';
// import OwnSchool from './components/own_school/OwnSchool';
// import Footer from './components/footer/Footer';
// import './index.css'
 
// const App = () => {
//     return (
//         <div className="app">
//             <Header />
//             <Hero />
//             <FeatureSection />
//             <Possible />
//             <OwnSchool />
//             <Footer />
//         </div>
//     );
// };

// export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
// import Hero from './components/hero/Hero';
// import FeatureSection from './components/feature/FeatureSection';
// import Possible from './components/vozm/Possible';
// import OwnSchool from './components/own_school/OwnSchool';
// import Footer from './components/footer/Footer';
// import FeaturePage from './components/FeaturePage/FeaturePage';
// import './index.css';
// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <Routes>
//                     <Route path="/" element={<MainPage />} />
//                     <Route path="/feature/:featureKey" element={<FeaturePage />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// const MainPage = () => (
//     <div>
//         <Header />
//         <Hero />
//         <FeatureSection />
//         <Possible />
//         <OwnSchool />
//         <Footer />
//     </div>
// );

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
// import Hero from './components/hero/Hero';
// import FeatureSection from './components/feature/FeatureSection';
// import Possible from './components/vozm/Possible';
// import OwnSchool from './components/own_school/OwnSchool';
// import Footer from './components/footer/Footer';
// import FeaturePage from './components/FeaturePage/FeaturePage';
// import CityDetails from './components/cityDetails/CityDetails';
// import './index.css';

// const App = () => {
//     return (
//         <Router>
//             <div className="app">
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={<MainPage />} />
//                     <Route path="/feature/:featureKey" element={<FeaturePage />} />
//                     <Route path="/city/:cityId" element={<CityDetails />} />
//                 </Routes>
//                 <Footer />
//             </div>x
//         </Router>
//     );
// };

// const MainPage = () => (
//     <div>
//         <Hero />
//         <FeatureSection />
//         <Possible />
//         <OwnSchool />
//     </div>
// );

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import FeatureSection from './components/feature/FeatureSection';
import Possible from './components/vozm/Possible';
import OwnSchool from './components/own_school/OwnSchool';
import Footer from './components/footer/Footer';
import FeaturePage from './components/FeaturePage/FeaturePage';
import CityDetails from './components/cityDetails/CityDetails';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/feature/:featureKey" element={<FeaturePage />} />
                    <Route path="/city/:cityId" element={<CityDetails />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

const MainPage = () => (
    <div>
        <Hero />
        <FeatureSection />
        <Possible />
        <OwnSchool />
    </div>
);

export default App;
