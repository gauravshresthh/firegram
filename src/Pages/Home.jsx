import React from 'react';
import {Link} from'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <div className="hero-info"><h1>Test the app on click ,<br/> <span className='paper'>not paper</span></h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nam sequi necessitatibus vero veritatis? Voluptas sed, quo quaerat animi quas, fuga asperiores nulla tempora cum aut magni voluptatibus harum deleniti blanditiis accusamus. Nemo voluptatum quibusdam quis recusandae, unde accusantium placeat beatae eveniet enim quisquam quasi excepturi inventore ratione repellendus facere!</p><Link to='/posts' className='startBtn'>Get Started</Link></div>
      <div className="hero-img"><img src="https://images.unsplash.com/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt=""/></div>
    </div>
  );
};

export default Home;
