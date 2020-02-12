import React from 'react';
import {GalleryList} from '../organisms/Gallerylist';

interface ListNumProps{
  listNum: number,
  location: any
}

const List: React.FC<ListNumProps> = (props) => {
  return(
    <div>
      <GalleryList listNum={props.location.state.listNum} />
    </div>
  )
}

export default List;