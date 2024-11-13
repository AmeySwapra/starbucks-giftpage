import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import logo from '../assests/img/logo.png';
import appstoreiOSImage from '../assests/img/appstoreiOS.png';
import appstoreAndroidImage from '../assests/img/appstoreAndroid.png';

const FooterLinkSection = ({ title, links }) => (
    <div className="flex flex-col text-white">
        <Link to="giftcards" className="font-bold text-lg mb-4">{title}</Link>
        {links.map((link, index) => (
            <Link key={index} to="" className="text-sm mb-4">{link}</Link>
        ))}
    </div>
);

const Footer = () => {
    return (
        <div className="bg-[#0e382c] w-full py-5 hidden sm:block">
            <div className="p-8 px-4 sm:px-0 md:w-4/5 m-auto mt-3">
                <div className="grid grid-cols-6 gap-6">
                    <div>
                        <img src={logo} className="w-16" alt="Logo" />
                    </div>
                    
                    <FooterLinkSection 
                        title="About Us" 
                        links={['Our Heritage', 'Our Company', 'Coffee House']} 
                    />
                    <FooterLinkSection 
                        title="Responsibility" 
                        links={['Community', 'Ethical Sourcing', 'Environment', 'Diversity']} 
                    />
                    <FooterLinkSection 
                        title="Quick Links" 
                        links={['Careers', 'Season\'s Gifting', 'FAQs', 'Customer Service', 'Delivery']} 
                    />

                    <div className="flex flex-col text-white">
                        <Link to="" className="font-bold text-lg mb-4">Social Media</Link>
                        <div className="flex gap-5 text-2xl">
                            <a href="https://www.instagram.com/starbucksindia/"><BsInstagram /></a>
                            <a href="https://www.facebook.com/starbucksindia"><CgFacebook /></a>
                            <a href="https://twitter.com/starbucksindia"><BsTwitter /></a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <a href="https://apps.apple.com/in/app/starbucks-india/id1210203958">
                            <img src={appstoreiOSImage} alt="Download on the App Store" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.starbucks.in">
                            <img src={appstoreAndroidImage} alt="Get it on Google Play" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-solid border-white mt-7 text-white py-3 flex justify-between text-sm">
                    <div>
                        {['Web Accessibility', 'Privacy Statement', 'Terms of Use', 'Contact Us'].map((text, index) => (
                            <Link key={index} to="" className={`pr-3 ${index < 3 ? 'border-r' : ''} ${index > 0 ? 'pl-3' : ''}`}>
                                {text}
                            </Link>
                        ))}
                    </div>
                    <p className="text-xs">© 2023 Starbucks Coffee Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
