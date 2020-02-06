import React from 'react';
import {Route} from "react-router-dom";
import {GalleryList} from '../components/organisms/Gallerylist';
import {routePath} from '../constants/Route';


const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>location1</h1>location1のギャラリーページです <GalleryList num={0}/></div>
const page2 = () => <div><h1>location2</h1>location2のギャラリーページです <GalleryList num={1}/></div>
const page3 = () => <div><h1>location3</h1>location3のギャラリーページです <GalleryList num={2}/></div>
const page4 = () => <div><h1>location4</h1>location4のギャラリーページです <GalleryList num={3}/></div>

export const Routing: React.FC = () => {
  return(
    <div>
    <Route path='/' exact component={topPage}/>
    <Route path={routePath.PAGE_ONE} exact component={page1}/>
    <Route path={routePath.PAGE_TWO} exact component={page2}/>
    <Route path={routePath.PAGE_THREE} exact component={page3}/>
    <Route path={routePath.PAGE_FOUR} exact component={page4}/>
  </div>
  )
}