import React from 'react';
import { Gallery } from '../../constants/Images';


interface ListNumProps{
  listNum: number,
}

export const GalleryList: React.FC<ListNumProps> = (props) => {
  return(
    <p className="gallerylist">
      {Gallery[props.listNum].map((url) => <img src={url} alt={url} key={url}/>)}
    </p>
  )
}