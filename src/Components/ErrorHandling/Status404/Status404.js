import React from 'react';
import Status from '../Status'
import './Status404.css';
import { Link } from 'react-router-dom';
import errorIcon from '../../../Images/error.png'


const Status404 = () => {
  console.log('error')
    return (
      <Status code={401}>
        <div className='error-container'>
          <div className='error-number'>4 {errorIcon} 4</div>
          <div className='st404-error-message'>"Oops, it looks like that was some bad news! Please try again</div>
          <Link to='/' className='go-home-link'>
            <button className='go-home-btn'>Home</button>
          </Link>
        </div>
      </Status>
    );
  };

export default Status404;