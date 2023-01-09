import React from 'react';
import {Link} from "react-router-dom";
import {BsGithub} from 'react-icons/bs'

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-5 bg-gray-800 shadow-md text-white py-5 text-2xl'>
            <h3 className='font-bold font-["Nunito"] hover:text-blue-700 text-5xl mx-5'><Link to='/'><BsGithub/></Link></h3>
            <span>
                <Link to='/' className='mr-7 hover:text-gray-100 font-["Nunito"]'>Main</Link>
                <Link to='saved-page' className='hover:text-gray-100 font-["Nunito"] mx-5'>Saved</Link>
            </span>
        </nav>
    );
};

export default Header;