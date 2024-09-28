import React, { useContext } from "react";
import {Songs} from "../context"
export default function ListSongs(){
     const{DataSongs} = useContext(Songs)
    // console.log(DataSongs)
        return(
        <div className="col-span-2 overflow-scroll">
            <table className='table-auto w-full '>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><i className='fa fa-download'></i></th>
                    </tr>
                </thead>

                <tbody>
                    {DataSongs.map((song, index) =>(
                    <tr key ={index} className="bg-slate-800 h-12 text-gray-500 hover:bg-slate-600">
                        <td className="text-center">{index +1}</td>
                        <td>{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center"><a href={song.url}> <i className="fa fa-download"></i>
                        </a>
                        </td>
                    </tr> 
                ))}
                    
                </tbody>
            </table>
        </div>
     )
}