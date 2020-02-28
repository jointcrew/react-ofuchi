import React from 'react';
import * as H from 'history'
import {RouteComponentProps} from 'react-router-dom'
import {GalleryList} from '../organisms/GalleryList';

interface ListProps extends RouteComponentProps{
  location: H.Location<{listNum: number}>
}

const List = (props: ListProps) => {
  return(
    <div>
      <GalleryList listNum={props.location.state.listNum} />
    </div>
  )
}

export default List;
