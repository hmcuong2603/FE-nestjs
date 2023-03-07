import React from 'react'
import './Menu.css'
const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='contact-footer'>
                <div className='footer-contact'>
                    <div className='contact-child'>Links</div>
                    <div className='contact-child'>Product Categories</div>
                    <div className='contact-child'>Stores</div>
                    <div className='contact-child'>Webshop</div>
                    <div className='contact-child'>Brands</div>
                </div>
                <div className='footer-contact'>
                    <div className='contact-child'>Contact</div>
                    <div className='contact-child'>myInfo@gmail.com</div>
                    <div className='contact-child'>Help Center</div>
                    <div className='contact-child  icon-footer'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                </div>
                <div className='footer-contact'>
                    <div className='contact-child'>Users</div>
                    <div className='contact-child'>API</div>
                    <div className='contact-child'>Training</div>
                    <div className='contact-child'>Blog</div>
                    <div className='contact-child'>About</div>
                </div>
                <div className='footer-contact'>
                    <div className='contact-child'>Project</div>
                    <div className='contact-child'>Download</div>
                    <div className='contact-child'>Changelog</div>
                    <div className='contact-child'>Commission Icons</div>
                    <div className='contact-child'>All Versions</div>
                </div>
            </div>
            <div className='footer-make'>
                <i className="fa-regular fa-heart"></i>
                <span>Made With Love</span>
            </div>
        </div>
    )
}

export default Footer