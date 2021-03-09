import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({url, title}) => {
  return ( 
    <Fragment>
      <div className='card'>
        <img
          src={url}
          alt={title}
          height={240}
        />
        <p>{title}</p>
      </div>
    </Fragment>
   );
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
export default GifGridItem;
