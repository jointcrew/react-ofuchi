import React from 'react';
import {GalleryList} from '../organisms/Gallerylist';

interface ListNumProps{
  listNum: number,
}

const List: React.FC<ListNumProps> = (props) => {
  const {listNum} = props
  return(
    <div>
      <GalleryList listNum={listNum} />
    </div>
  )
}

export default List;