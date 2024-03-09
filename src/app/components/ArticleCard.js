"use client"
import Modal from './modal';
import React ,{useState} from 'react'
import {EyeIcon,PencilIcon,TrashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function JobCard({id,title,location,remote,url,jobtypes}) {
    const [showModal,setShowModal]=useState(false);
    const router = useRouter();
  return (
    <>
    <div class=" flex flex-row bg-secondary rounded-md py-4 pl-4 w-5/12 mb-4">
        <div  class="flex bg-tertiary rounded-md  p-4 justify-between w-full">
            <div class="flex flex-col justify-between w-full 	">
                <p class=" text-xl text-white ">
                    {title}
                </p>
                <div class="flex flex-row space-x-4 ">
                <button  onClick={()=>{setShowModal('true')}}>
                   <EyeIcon class="h-6 w-6 text-white hover:text-secondaryHover"/>
                </button>
    
                </div>

            </div >
        </div>
        <div class="align place-self-center px-5">
       </div>
 </div>
 <Modal
 isVisible={showModal}  
 onClose={()=>setShowModal(false)}
 title={"Detail"}
 >
        <div className='flex items-center   w-10/12 mb-6'>
          <label className='text-white w-[180px] '>Location</label>
          <p className='text-white'>{location}</p>
          
        </div>
        <div className='flex items-center   w-10/12 mb-6'>
          <label className='text-white w-[180px] '>Remote</label>
          <p className='text-white'>{remote}</p>
        </div>
        <div className='flex items-center   w-10/12 mb-6'>
          <label className='text-white w-[180px] '>Url</label>
          <p className='text-white'>{url}</p>
        </div>
        <div className='flex items-center   w-10/12 mb-6'>
          <label className='text-white w-[180px] '>Job Types</label>
          <p className='text-white'>{jobtypes}</p>
        </div>
        
 </Modal>
 </>
  )
}
