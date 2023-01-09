import React, {useState} from 'react';
import {IRepos} from "../models/models";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

const Card = ({repos}: { repos: IRepos }) => {
    const {addSaved, removeSaved} = useActions()
    const {saved} = useAppSelector(state => state.github)
    const [isSaved, setIsSaved] = useState(saved.includes(repos.html_url))
    const addToSaved = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addSaved(repos.html_url)
        setIsSaved(true)
    }
    const removeToSaved = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeSaved(repos.html_url)
        setIsSaved(false)
    }


    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md transition-all bg-gray-50'>
            <h2 className='text-lg font-bold'>{repos.full_name}</h2>
            <p className='text-sm'>
                Forks:<span className='mr-2'>{repos.forks}</span>
                Watchers:<span>{repos.watchers}</span>
            </p>
            {!isSaved && <button className='py-2 mr-2 px-5 bg-yellow-50 rounded hover:shadow-md transition-all'
                                 onClick={addToSaved}>Add
            </button>}
            {isSaved && <button className='py-2 px-5 bg-red-500 rounded hover:shadow-md transition-all'
                                onClick={removeToSaved}>Remove
            </button>}
        </div>
    );
};

export default Card;