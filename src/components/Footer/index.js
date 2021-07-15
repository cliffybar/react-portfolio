import React from 'react';
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'

const Footer = () => {
    return (
        <section className='footer'>
            <ul className='row justify-content-center'>
                <li className='col col-sm-2 col-lg-2'><a href='https://github.com/cliffybar' target='blank'><img src={github} className='img-link-social' alt='GitHub logo' /></a></li>
                <li className='col col-sm-2 col-lg-2'><a href='https://www.linkedin.com/in/clifford-david-crowell/' target='blank'><img src={linkedin} className='img-link-social' alt='LinkedIn logo' /></a></li>
                <li className='col col-sm-2 col-lg-2'><a href='https://www.instagram.com/cliffyeats/' target='blank'><img src={instagram} className='img-link-social' alt='Instagram logo' /></a></li>
            </ul>
        </section>
    )
}

export default Footer;