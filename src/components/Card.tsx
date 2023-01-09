import React from 'react';
import {IRepos} from "../models/models";

const Card = ({repos}:{repos:IRepos}) => {
    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md transition-all bg-gray-50'>
            <h2 className='text-lg font-bold'>{repos.full_name}</h2>
            <p className='text-sm'>
                Forks:<span className='mr-2'>{repos.forks}</span>
                Watchers:<span>{repos.watchers}</span>
            </p>
        </div>
    );
};

export default Card;