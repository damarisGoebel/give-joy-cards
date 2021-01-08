import React from 'react';

import images from '../assets/data/image'
import './Card.css'

function Card() {
    return (
        <div id="columns">
{images.map(image => 
        <figure>

        <img src={image.image}/>
          <figcaption>{image.category}</figcaption>
          </figure>
          )}
        <small>&copy; <a href="www.damarisgoebel.com">Damaris Göbel</a></small>
          </div>
    )

}
export default Card