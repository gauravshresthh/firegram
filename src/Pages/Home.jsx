import React from 'react';
import {Link} from'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <div className="hero-info">
      <h1>Test the app on click ,<br/> <span className='paper'>Realtime Database</span></h1>
      <p>Instagram type image gallery built using React Js, React Router and Firebase . Used google cloud functions to interact with the realtime database. </p>
      <Link to='/posts' className='startBtn'>Get Started</Link>
      </div>
      <div className="hero-img">
        <img src="https://images.unsplash.com/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt=""/></div>
    </div>
  );
};

export default Home;
