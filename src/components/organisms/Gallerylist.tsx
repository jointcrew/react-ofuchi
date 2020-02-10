import React from 'react';
import { Gallery } from '../../constants/Images';


interface listNumProps{
  listNum: number,
}

export const GalleryList: React.FC<listNumProps> = (props) => {
  return(
    <p className="gallerylist">
      {Gallery[props.listNum].map((url, index) => <img src={Gallery[props.listNum][index]} alt={Gallery[props.listNum][index]} key={Gallery[props.listNum][index]}/>)}
    </p>
  )
}