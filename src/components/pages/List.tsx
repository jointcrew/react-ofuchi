import React from 'react';
import {GalleryList} from '../organisms/Gallerylist';

interface ListNum {
  listNum: number
}

interface StateList {
  state: ListNum
}

interface ListNumProps{
  location: StateList
}

const List: React.FC<ListNumProps> = (props) => {
  return(
    <div>
      <GalleryList listNum={props.location.state.listNum} />
    </div>
  )
}

export default List;