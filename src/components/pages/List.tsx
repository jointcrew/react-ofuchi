import React from 'react';
import Header from '../organisms/Header';
import {GalleryList} from '../organisms/Gallerylist';

interface urlProps{
  url: number,
}

const List: React.FC<urlProps> = (props) => {
  const pagenumber:number = props.url;
  return(
    <div>
      <Header />
      <GalleryList num={pagenumber} />
    </div>
  )
}

export default List;