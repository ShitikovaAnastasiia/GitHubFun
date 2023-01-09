import React from 'react';
import {useAppSelector} from "../hooks/redux";

const SavedPage = () => {
    const {saved}=useAppSelector(state => state.github)
    if (saved.length ===0){return (<div>none</div>)}
    return (
        <div className='flex justify-center mx-auto h-screen w-screen pt-20 font-["Nunito"] bg-gray-800 text-white'>
            <ul className='list-none'>
                {saved.map(s=>(
                    <li key={s}>
                        <a href={s} target='_blank'>{s}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SavedPage;