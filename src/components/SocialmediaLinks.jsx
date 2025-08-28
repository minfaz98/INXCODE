import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-6 py-5  bg-zinc-900/75  rounded-lg shadow-lg">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} style={{ color: '#3b5998' }} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} style={{ color: '#1da1f2' }} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} style={{ color: '#E4405F' }} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;