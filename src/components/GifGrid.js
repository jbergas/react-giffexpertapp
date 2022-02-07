import React from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading}=useFetchGif();


    
  return (
  <>
  <h3 className="card animate_animated animate__fadeIn">{ category }</h3>    
  <div className='card-grid'>
  
  {loading && <p className="card animate_animated animate__flash">Loading</p>}
      {
          images.map( (img)=> <GifGridItem 
          key={img.id}
          {...img}/>        )
      }
      
  </div>
  </>
  )
};
