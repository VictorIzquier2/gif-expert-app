import { Fragment, useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

  const {data: images, loading}= useFetchGifs(category)

  return ( 
    <Fragment>
      <h3>{category}</h3>
      {loading && 'Cargando...'}
      <div className='card-grid'>
        {images.map(({id, url, title}) => (
          <GifGridItem
            key={id}
            id={id}
            url={url}
            title={title}
          />
        ))}
      </div>

    </Fragment>
   );
}
 
export default GifGrid;