import React from 'react'
import { useChat } from '../ChatContext'
import BroadcastModal from './BroadcastModal';
import { Link } from 'react-router-dom';
const Home = () => {

   const {openModal} = useChat();
  return (
    <>
    <div className=''>
        <ul className='bg-gray-200 p-5 m-5 w-1/4 rounded-lg'>
            <Link to="/user1">
            <li className='p-2 bg-gray-400 rounded-lg m-2'>user 1</li>
            </Link>
             
             <Link to="/user2">
             <li className='p-2 bg-gray-400 rounded-lg m-2'>user 2</li>
             </Link>
            
        </ul>
        <button className='bg-blue-300 p-2 rounded-lg m-5' onClick={openModal}>Broadcast</button>
        
        
    </div>
    <BroadcastModal/>
    </>
  )
}

export default Home