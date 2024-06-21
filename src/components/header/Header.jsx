// import React from 'react';
// import './Header.css';
// import vector from '../../img/Vector.svg';
// import logo from '../../img/logo_EdSpase.svg';

// const Header = () => {
//     return (
//         <header className="header header-content">
            
//             <div className="content-container">
//                 <div className="header__logo">
//                 <img src={logo} alt="" />
//             </div>
//             <nav className="header__nav">
//                 <a href="#features" className="header__nav-item">Возможности</a>
//                 <a href="#pricing" className="header__nav-item">Стоимость</a>
//                 <a href="#contact" className="header__nav-item">Контакты</a>
//                 <a href="#contact" className="header__nav-item">Главная</a>

//             </nav>
//             <div className="header__language-selector">
//                 <button className="language-button">  <p>RU <img src={vector} alt="Arrow"/></p>
//                 </button>
//             </div>
//             </div>
            
//         </header>
//     );
// };

// export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import vector from '../../img/Vector.svg';
// import logo from '../../img/logo_EdSpase.svg';

// const Header = () => {
//     return (
//         <header className="header header-content">
//             <div className="content-container">
//                 <div className="header__logo">
//                     <img src={logo} alt="" />
//                 </div>
//                 <nav className="header__nav">
//                     <a href="#features" className="header__nav-item">Возможности</a>
//                     <a href="#pricing" className="header__nav-item">Стоимость</a>
//                     <a href="#contact" className="header__nav-item">Контакты</a>
//                     <Link to="/" className="header__nav-item">Главная</Link>
//                 </nav>
//                 <div className="header__language-selector">
//                     <button className="language-button">
//                         <p>RU <img src={vector} alt="Arrow" /></p>
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import vector from '../../img/Vector.svg';
import logo from '../../img/logo_EdSpase.svg';

const Header = () => {
    const location = useLocation();

    return (
        <header className="header header-content">
            <div className="content-container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <nav className="header__nav">
                    <a href="#features" className="header__nav-item">Возможности</a>
                    <a href="#pricing" className="header__nav-item">Стоимость</a>
                    <a href="#contact" className="header__nav-item">Контакты</a>
                    {location.pathname !== '/' && (
                        <Link to="/" className="header__nav-item">Главная</Link>
                    )}
                </nav>
                <div className="header__language-selector">
                    <button className="language-button">
                        <p>RU <img src={vector} alt="Arrow" /></p>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
