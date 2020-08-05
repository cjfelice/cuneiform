import React from 'react';
import './Canvas.scss';

function Canvas(props) {
  // title = name
  const { name, description, music_id, mediaUrl } = props;

  return (
    <div>
      <div className='canvas'>
        <div className='canvas_header'>
          <h4 className='canvas_title'>username</h4>
          <h1 className='canvas_user'>{name}</h1>
        </div>
        <div className='canvas_canvis'>
          <img className='canvas_media' src={mediaUrl} alt='' />

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
        <h4 className='canvas_user'>{description}</h4>
        {/* h1 and h4 tags are only placeholders here */}
        <h1 className='canvas_title'>name </h1>
      </div>
    </div>
  );
}

export default Canvas;
