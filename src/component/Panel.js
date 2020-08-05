import React, { Fragment } from 'react';
import './Panel.scss';

function Panel(props) {
  // title = name
  const { name, description, music_id, media } = props;

  return (
    <div>
      <div className='panel'>
        <div className='panel_header'>
          <h4 className='panel_title'>username</h4>
          <h1 className='panel_user'>{name}</h1>
        </div>
        <div className='panel_canvis'>
          {media.map((item) => {
            return (
              <Fragment>
                <img className='panel_media' src={item.mediaUrl} alt='' />
              </Fragment>
            );
          })}
        </div>
        <h4 className='panel_user'>{description}</h4>
        {/* h1 and h4 tags are only placeholders here */}
        <h1 className='panel_title'>name </h1>
      </div>
    </div>
  );
}

export default Panel;
