import React, {memo} from 'react';
import "./footer.css"

export const Footer = memo(({}) => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Klaus</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>


                <div className="footer__social">
                    <a href="https://twitter.com/SokoladF" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://instagram.com/nikolayborsin" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://t.me/TutusCatutus" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-telegram"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Klaus. All rigths reserved
                </span>
            </div>
        </footer>
    );
});
