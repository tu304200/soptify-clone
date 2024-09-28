import React from "react";

export default function DetailSong(){
     return(
        <div className="col-span-1 p-3">
            <h2 className='text-cyan-500 font-bold'>Now playing</h2>
            <h2 className='text-neutral-400 text-2xl'>Sing me to sleep</h2>
            <div className='w-[240px] m-auto mt-10'>

                <img className='w-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alan_Walker_%28cropped%29.jpg/330px-Alan_Walker_%28cropped%29.jpg' alt= 'avatar'/>
            </div>
            <div className='flex justify-evenly items-center mt-10'>

                <img className='w-[70px] rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alan_Walker_%28cropped%29.jpg/330px-Alan_Walker_%28cropped%29.jpg' alt= 'avatar'/>
                <span className='text-xl text-whilte'>Alan Alan Walker</span>
            </div>
       
       
       
        </div>
     )
}