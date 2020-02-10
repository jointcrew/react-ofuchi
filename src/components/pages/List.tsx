import React from 'react';
import {GalleryList} from '../organisms/Gallerylist';

interface listNumProps{
  listNum: number,
}

const List: React.FC<listNumProps> = (props) => {
  const {listNum} = props
  return(
    <div>
      <GalleryList listNum={listNum} />
    </div>
  )
}

export default List;