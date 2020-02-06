import React from 'react';
import { Gallery } from '../../constants/images';


interface numProps{
  num: number,
}

export const GalleryList: React.FC<numProps> = (props) => {
  return(
    <p className="gallerylist">
      {Gallery[props.num].map((url, index) => <img src={Gallery[props.num][index]} alt={Gallery[props.num][index]} key={Gallery[props.num][index]}/>)}
    </p>
  )
}