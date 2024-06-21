
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import H2 from '../h2/H2';
// import './FeaturePage.css';
// import featuresDetails from '../../data/featureDetails.json';
// import Buttons from '../button/Buttons';
// import Modal from '../modal/Modal';
// import image from '../../img/ilu1.svg';


// const FeaturePage = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = () => {
//         console.log('toggleModal called');
//         setIsModalOpen(!isModalOpen);
//     };

//     const { featureKey } = useParams();
//     const feature = featuresDetails[featureKey];

//     if (!feature) {
//         return <div>Feature not found</div>;
//     }

//     return (
//         <div>
//             <Header />
//             <section className="feature-hero">
//                 <div className="content-container">
//                     <div className="hero__content">
//                         <h1 className="hero__title">{feature.title}</h1>
//                         <p className="hero__description">{feature.description}</p>
//                         <p className="feature-details__text">{feature.detailedText1}</p>
//                     <p className="feature-details__text">{feature.detailedText2}</p>
//                         <div>
//                             <Buttons onClick={toggleModal} />
//                             {isModalOpen && <Modal key={Date.now()} closeModal={toggleModal} />}
//                         </div>
//                     </div>
//                     <div className="hero__image">
//                         <img src={image} alt={feature.title} />
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// };

// export default FeaturePage;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import H2 from '../h2/H2';
import './FeaturePage.css';
import featuresDetails from '../../data/featureDetails.json';
import Buttons from '../button/Buttons';
import Modal from '../modal/Modal';
import image from '../../img/ilu1.svg';

const FeaturePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const { featureKey } = useParams();
    const feature = featuresDetails[featureKey];

    if (!feature) {
        return <div>Feature not found</div>;
    }

    return (
        <div>
            <section className="feature-hero">
                <div className="content-container">
                    <div className="hero__content">
                        <h1 className="hero__title">{feature.title}</h1>
                        <p className="hero__description">{feature.description}</p>
                        <p className="feature-details__text">{feature.detailedText1}</p>
                        <p className="feature-details__text">{feature.detailedText2}</p>
                        <div>
                            <Buttons onClick={toggleModal} />
                            {isModalOpen && <Modal key={Date.now()} closeModal={toggleModal} />}
                        </div>
                    </div>
                    <div className="hero__image">
                        <img src={image} alt={feature.title} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturePage;
