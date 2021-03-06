import React, { Fragment } from 'react';

const GifGridItem = ({url, title}) => {
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
 
export default GifGridItem;