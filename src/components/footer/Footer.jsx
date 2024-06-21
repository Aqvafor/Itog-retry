import React from 'react';
import './Footer.css'; 

import logo from '../../img/logo_EdSpase.svg';
import tel from '../../img/Tel.svg';
import vk from '../../img/Vk.svg';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className='content-container column'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Ed Space Logo" className="footer-logo" />
                </div>
                <div className="footer-content-main">
                     <div className="footer-section">
                    <h4 className='footer-h4'>Меню:</h4>
                    <ul className="footer-menu">
                        <li><a href="/features">Возможности</a></li>
                        <li><a href="/pricing">Стоимость</a></li>
                        <li><a href="/selection">Выбор Ed Space</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className='footer-h4'>Документы:</h4>
                    <ul className="footer-menu">
                        <li><a href="/agreement">Пользовательское соглашение</a></li>
                        <li><a href="/offer">Публичная оферта</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className='footer-h4'>Контакты:</h4>
                    <ul className="footer-menu">
                        <li><a href="/features">admin@site.com</a></li>
                        <li><a href="/pricing">+7 (900) 123-45-67</a></li>
                        <li><a href="/selection">+7 (999) 876-54-32</a></li>
                    </ul>
                </div>
                </div>
               
            </div>
            <div className="footer-socials">
                    <p className="footer-socials-text">2022 Ed Space. Все права защищены</p>
                    <div className="footer-img">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <img src={vk} alt="VK" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <img src={tel} alt="Telegram" />
                </a>

                    </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
