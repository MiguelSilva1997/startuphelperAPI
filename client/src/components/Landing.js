import React from 'react';
import YouTube from 'react-youtube';

const Landing = () => {
  return (
    <div>
      <div style={{ textAlign: 'center'}}>
        <h1>
          Joga Bonito
        </h1>
        <h5> The place where every Futbol fan finds his next challenge!</h5>
        <br></br>
          <YouTube
            className="z-depth-5"
            videoId="rz-xJeiOxC4"
            />
      </div>
    </div>
  )
}


export default Landing;
