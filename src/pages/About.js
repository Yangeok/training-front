import React from 'react';
import 'assets/styles/page.css';

const About = () => {
  return (
    <>
      <h3 className="main-description">도움말</h3>
      <div className="main-description">
        운동블로그, 유튜브를 모아서 포스팅이나 영상을 한데 모으는
        구독서비스입니다.
      </div>
      <p />
      <img
        src="https://res.cloudinary.com/yangeok/image/upload/v1554888938/training-log/11.jpg"
        alt=""
      />
    </>
  );
};

export default About;
