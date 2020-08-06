import React, { Fragment } from 'react';
import './Panels.scss';

function Panels(props) {
  // title = name
  const { title, description, music_id, media, username, id } = props;

  return (
    <div>
      <div className='panels'>
        <div className='panels_header'>
          <h1 className='panels_title'>{title}</h1>

          <h1 className='panels_user'>{username}</h1>
        </div>
        <div className='panels_canvis'>
          {media.map((item) => {
            return (
              <Fragment>
                <img className='panels_media' src={item.mediaUrl} alt='' />
              </Fragment>
            );
          })}
        </div>
        <h4 className='panels_user'>{description}</h4>
        {/* h1 and h4 tags are only placeholders here */}
      </div>
    </div>
  );
}

export default Panels;
