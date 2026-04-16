import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

const Project = ({title, description, subDescription, href,image,tags} ) => {
  const [hidden,setHidden]=useState(false); 
    return (
    <>
        <div 
        onMouseEnter={()=>setPreview(image)}
        onMouseLeave={()=>setPreview(null)}
        className='flex-wrap items-center justify-betweenpy-10 space-y-14 sm:flex sm:space-y-10'>
            
            <div>
                <p className='text-2xl'>{title}</p>
                <div>
                    {tags.map((tag)=>(<span key={tag.id} className='text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded-md mr-2'>
                        {tag.name} 
                    </span>))}
                </div>
            </div>
            <button 
            onClick={()=>setHidden(true)}
            className='flex items-center gap-1 cursor-pointer hover-animation'>
                Read more
                <img src='assets/arrow-right.svg' className='w-5'/>
            </button>
        </div>
        <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'/>
        {hidden && (<ProjectDetails 
            title={title} 
            description={description} 
            subDescription={subDescription} 
            href={href} 
            image={image} 
            tags={tags}
            closeModel={()=>setHidden(false)}
        />)}
    </>
  )
}

export default Project