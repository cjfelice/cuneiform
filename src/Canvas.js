import React from 'react';
import './Row.scss';

function Canvas() {
  return (
    <div>
      {/* header name */}
      <div className='row'>
        <h1>username</h1>
        <div className='row_canvis'>
          <img
            className='row_canvi'
            src='https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
          />

          <img
            className='row_canvi'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Yangmingshan_Taipei_Chinese_Pavilion.jpg'
          />

          <img
            className='row_canvi'
            src='https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
          />
          <img
            className='row_canvi'
            src='https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg'
          />
          <img
            className='row_canvi'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Taipei_101_2008_NewYear_Firework.jpg'
          />
          <img
            className='row_canvi'
            src='http://res.cloudinary.com/deaiyjjnf/image/upload/v1512081460/orsdiipmsn7e8vargxhg.jpg'
          />

          <h4 className='row_canvi'>name </h4>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
