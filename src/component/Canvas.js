import React, { Fragment } from 'react';
import './Canvas.scss';

function Canvas(props) {
  // title = name
  const { name, description, music_id, media } = props;

  // const Media = (item) => {
  //   return <img src={item} alt='' />;
  // };

  // const MediaMap = () => {
  //   media.data.map((item) => {
  //     return <Media item={item.mediaUrl} />;
  //   });
  // };

  return (
    <div>
      <div className='canvas'>
        <div className='canvas_header'>
          <h4 className='canvas_title'>username</h4>
          <h1 className='canvas_user'>{name}</h1>
        </div>
        <div className='canvas_canvis'>
          {media.map((item) => {
            return (
              <Fragment>
                <img className='canvas_media' src={item.mediaUrl} alt='' />
              </Fragment>
            );
          })}
        </div>
        <h4 className='canvas_user'>{description}</h4>
        {/* h1 and h4 tags are only placeholders here */}
        <h1 className='canvas_title'>name </h1>
      </div>
    </div>
  );
}

export default Canvas;
