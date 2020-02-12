import React from 'react';
import { Gallery } from '../../constants/Images';


interface ListNumProps{
  listNum: number,
}

export const GalleryList: React.FC<ListNumProps> = (props) => {
  return(
    <p className="gallerylist">
      {Gallery[props.listNum].map((url, index) => <img src={Gallery[props.listNum][index]} alt={Gallery[props.listNum][index]} key={Gallery[props.listNum][index]}/>)}
    </p>
  )
}