import React from 'react';

const Footer = () => {
    return (
        <footer className='py-12 bg-footer bg-cover'>
            <div class=" footer p-10 justify-items-center text-accent">
                <div>
                    <span class="footer-title">SERVICES</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">Terms of use</a>
                </div>
            </div>
            <div>
                <div class="footer footer-center p-6  text-base-content">
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;