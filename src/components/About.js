import React from 'react';

function About(props) {
  const image = props.image || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{props.aboutText}</p>
    </aside>
  );
}

export default About;
