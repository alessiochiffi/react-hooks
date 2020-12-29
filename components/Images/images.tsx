import React from 'react';
import Masonry from "react-responsive-masonry";

export default function ImageList({images}) {

  return (
    <div>
    <Masonry
      columnsCount={3}
      gutter={'30'}
    >
      {images.map((image) =>
        <div  key={image.id}>
          <img
            alt={image.alt_description}
            src={image.urls.small}
            width="100%"
          />
        </div>
      )}
    </Masonry>
  </div>
  )
}