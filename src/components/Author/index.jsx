import React from 'react';
import moment from 'moment';
import profilePic from '../../pages/photo.jpg';

export default (props) => (
  <div style={{display: 'flex', }}>
    <img
      src={profilePic}
      className="sidebar__author-photo"
      style={{marginRight: '10px'}}
      width="50"
      height="50"
      alt={props.author.name}
    />
    <div>
      <div>
        {props.author.name}
      </div>
      <em>
        <small>
          {moment(props.publishDate).format('D MMM YYYY')}
        </small>
      </em>
    </div>
  </div>
);