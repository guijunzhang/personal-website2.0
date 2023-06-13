import { FaHome, FaInfo, FaPlus, FaCube } from 'react-icons/fa';


export default [
    {
        icon: <FaCube size="28" />,
        text: "Hi There! I am Guijun 😄",
        id: 1,
        on: true,
        dir: ''
    },
    {
        icon: <FaHome size="28" />,
        text: "Welcome Back! 😮",
        id: 2,
        on: false,
        dir: 'home'
    },
    {
        icon: <FaInfo size="28" />,
        text: "Learn more about me! 😊",
        id: 3,
        on: false,
        dir: 'about'
    },
    {
        icon: <FaPlus size="28" />,
        text: "Let's Connect! 🤗",
        id: 4,
        on: false,
        dir: 'contact'
    },
]