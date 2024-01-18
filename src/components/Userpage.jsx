import React from 'react'
import { useParams } from 'react-router-dom'
import { useChat } from '../ChatContext';
const Userpage = () => {
   let {userId}=  useParams();

   const {userMessages} = useChat();
  return (
    <>
    <div className='text-center bg-gray-200 py-2 px-5 shadow-xl'>{userId} - Messages</div>
    {console.log(userMessages)}
    <ul >{userMessages.map((user, index)=>(
        <li className='bg-blue-200 m-5 p-2 rounded-lg' key={index}>{`User ${index + 1}: ${user.message || 'No message'}`}</li>
    ))}</ul>
    </>
  )
}

export default Userpage