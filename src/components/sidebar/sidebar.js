import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import apiClient from '../../spotify';


function Sidebar() {
    const [image, setImage] = useState('https://images6.alphacoders.com/136/thumbbig-1367332.webp')
    useEffect(() => {
        apiClient.get("me").then(response => {
            setImage(response.data?.images[0]?.url)
        })
    }, [])
    return (
        <div className='sidebar-container'>
            < img
                src={image}
                className='image-container'
                alt='profile-pic'
            />
            <div>
                <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />} />
                <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />} />
                <SidebarButton title='Player' to='/player' icon={<FaPlay />} />
                <SidebarButton title='Favourites' to='/favourites' icon={<MdFavorite />} />
                <SidebarButton title='Library' to='/' icon={<IoLibrary />} />
            </div>
            <SidebarButton title='Sign out' to='' icon={<FaSignOutAlt />} />
        </div>

    )
}

export default Sidebar
