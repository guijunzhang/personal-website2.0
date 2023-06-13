import { FaHome, FaInfo, FaPlus, FaCoffee, FaFolder } from 'react-icons/fa';

function createMenuItem(icon, text, id, on, dir) {
    return {
        icon,
        text,
        id,
        on,
        dir
    };
  }

export default [
    createMenuItem(<FaCoffee size="28" />, "Hi There! I am Guijun 😄", 1, false, ''),
    createMenuItem(<FaHome size="28" />, "Welcome Back! 😮", 2, false, 'home'),
    createMenuItem(<FaInfo size="28" />, "Learn more about me! 😊", 3, false, 'about'),
    createMenuItem(<FaFolder size="28" />, "Explore some of my projects! 🧐", 4, false, 'projects'),
    createMenuItem(<FaPlus size="28" />, "Let's Connect! 🤗", 5, false, 'contact')
    
]