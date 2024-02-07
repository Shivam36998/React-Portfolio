import React from 'react'

const IconCards = ({icon, text, link, route}) => {
  return (
    <a href={link} target="_blank" className="home_icon">
      {icon}
      {text}
    </a>
  );
}


export default IconCards
