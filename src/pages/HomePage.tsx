import React, {useEffect, useState} from 'react';
import {useLazyGerUserItemQuery, useSearchUsersQuery} from '../store/github/github.api'
import {useDebounce} from "../hooks/debounce";
import Card from "../components/Card";

const HomePage = () => {
    const [search, setSearch] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const debounced = useDebounce(search)
    const onClickHandler = (username: string) => {
        fetchRepos(username)
        setDropDown(false)

    }
    const {isLoading, data} = useSearchUsersQuery(debounced, {skip: debounced.length < 2,refetchOnFocus:true})
    useEffect(() => {
        setDropDown(debounced.length > 2 && data?.length! > 0)
    }, [debounced, data])
    const [fetchRepos, {isLoading: isReposLoading, data: repos}] = useLazyGerUserItemQuery()

    return (
        <div className='flex justify-center mx-auto min-h-screen pt-20 font-["Nunito"] bg-gray-800'>
            <div className='relative w-[550px]'>
                <input type='text' className='border py-3 px-5 w-full h-[42px] mb-2'
                       placeholder='Find Your Profile'
                       value={search}
                       onChange={e => setSearch(e.target.value)}/>
                {dropDown &&
                    <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-gray-50'>
                        {isLoading && <p>Loading</p>}
                        {data?.map(user => (
                            <li key={user.id} onClick={() => onClickHandler(user.login)}
                                className='py-2 px-1 hover:bg-blue-700 hover:text-gray-200 transition-colors cursor-pointer '>{user.login}</li>
                        ))}
                    </ul>}
                <div className="container">
                    {isReposLoading && <span className='text-center'>Loading</span>}
                    {repos?.map(repo => <Card repos={repo} key={repo.id}/>)}
                </div>
            </div>

        </div>
    );
};

export default HomePage;