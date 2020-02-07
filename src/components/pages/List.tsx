import React from 'react';
import Header from '../organisms/Header';
import {GalleryList} from '../organisms/Gallerylist';

interface urlProps{
  listNum: number,
}

const List: React.FC<urlProps> = (props) => {
  const pagenumber:number = props.listNum;
  return(
    <div>
      <Header />
      <GalleryList num={pagenumber} />
    </div>
  )
}

export default List;