import React, { memo} from 'react';


export const Social = memo(({}) => {
    return (
        <div className='home__social'>
            <a href="https://instagram.com/nikolayborsin" className="home__social-icon" target='_blank'>
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/nikolay-borsin/" className="home__social-icon" target='_blank'>
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://twitter.com/SokoladF" className="home__social-icon" target='_blank'>
                <i className="uil uil-twitter"></i>
            </a>
            <a href="https://github.com/Armazok" className="home__social-icon" target='_blank'>
                <i className="uil uil-github"></i>
            </a>
        </div>
    );
});
