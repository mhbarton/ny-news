import React from 'react';
import Status from './Status';
import './Status404.css';
import { Link } from 'react-router-dom';


const Status404 = () => {
    return (
      <Status code={404}>
        <div className='error-container'>
        </div>
      </Status>
    );
  };

export default Status404;