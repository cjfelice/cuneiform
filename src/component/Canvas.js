import React from 'react';
import './Canvas.scss';

function Canvas() {
  return (
    <div>
      {/* header name */}
      <div className='canvas'>
        <div className='canvas_header'>
          <h1 className='canvas_user'>username</h1>
          <h4 className='canvas_title'>name </h4>
        </div>
        <div className='canvas_canvis'>
          <img
            className='canvas_media'
            src='https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
            alt=''
          />

          <img
            className='canvas_media'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Yangmingshan_Taipei_Chinese_Pavilion.jpg'
            alt=''
          />

          <img
            className='canvas_media'
            src='https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
            alt=''
          />
          <img
            className='canvas_media'
            src='https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg'
            alt=''
          />
          <img
            className='canvas_media'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Taipei_101_2008_NewYear_Firework.jpg'
            alt=''
          />
          <img
            className='canvas_media'
            src='http://res.cloudinary.com/deaiyjjnf/image/upload/v1512081460/orsdiipmsn7e8vargxhg.jpg'
            alt=''
          />
        </div>
        <h1 className='canvas_user'>username</h1>
        <h4 className='canvas_title'>name </h4>
      </div>
    </div>
  );
}

export default Canvas;
