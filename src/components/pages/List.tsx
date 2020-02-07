import React from 'react';
import Header from '../organisms/Header';
import {GalleryList} from '../organisms/Gallerylist';

interface urlProps{
  listNum: number,
}

const List: React.FC<urlProps> = (props) => {
  const {listNum} = props
  return(
    <div>
      <Header />
      <GalleryList listNum={listNum} />
    </div>
  )
}

export default List;