import React from 'react';

const Footer = () => {
    return (
        <footer className='py-12 bg-footer bg-cover'>
            <div className=" footer p-10 justify-items-center text-accent">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">Terms of use</a>
                </div>
            </div>
            <div>
                <div className="footer footer-center p-6  text-base-content">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;