import React from 'react';
import {GalleryList} from '../organisms/Gallerylist';

interface urlProps{
  listNum: number,
}

const List: React.FC<urlProps> = (props) => {
  const {listNum} = props
  return(
    <div>
      <GalleryList listNum={listNum} />
    </div>
  )
}

export default List;