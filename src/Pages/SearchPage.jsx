import React from 'react'
import MovieList from '../Components/MovieList'

function SearchPage({searchKey,setType}) {
  
  return (
    <div className='mt-20 mb-10 p-10'>
      <div className='flex flex-col w-fit gap-3 my-2'>
        <h3 className='font-bold text-lg'>Result for "{searchKey}"</h3>
        <select name="type" id="type"  onChange={(e)=>{
          e.preventDefault();
         setType(e.target.value)
        
        }} className='bg-gray-800 text-white  p-3 rounded-lg hover:bg-white hover:text-gray-800'>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <hr />
      <MovieList/>
    </div>
  )
}

export default SearchPage