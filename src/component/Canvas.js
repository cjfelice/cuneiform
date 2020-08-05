import React from 'react';
import './Canvas.scss';

function Canvas() {
  return (
    <div>
      {/* header name */}
      <div className='canvas'>
        <h1>username</h1>
        <div className='canvas_canvis'>
          <img
            className='canvas_canvi'
            src='https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
          />

          <img
            className='canvas_canvi'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Yangmingshan_Taipei_Chinese_Pavilion.jpg'
          />

          <img
            className='canvas_canvi'
            src='https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
          />
          <img
            className='canvas_canvi'
            src='https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg'
          />
          <img
            className='canvas_canvi'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Taipei_101_2008_NewYear_Firework.jpg'
          />
          <img
            className='canvas_canvi'
            src='http://res.cloudinary.com/deaiyjjnf/image/upload/v1512081460/orsdiipmsn7e8vargxhg.jpg'
          />

          <h4 className='canvas_canvi'>name </h4>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
