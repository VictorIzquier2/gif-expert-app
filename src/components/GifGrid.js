import { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

  const {data: images, loading}= useFetchGifs(category)

  return ( 
    <Fragment>
      <h3>{category}</h3>
      {loading && 'Cargando...'}
      <div className='card-grid'>
        {images.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))}
      </div>

    </Fragment>
   );
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid;