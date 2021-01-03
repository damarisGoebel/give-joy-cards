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

          {/* <figure>
          <img src="https://images.unsplash.com/photo-1588089303704-3d70bd6c8973?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=658&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet</figcaption>
          </figure>
          
        <figure>
          <img src="https://images.unsplash.com/photo-1607354597052-9701a591a322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>
        
          <figure>
          <img src="https://images.unsplash.com/photo-1580753402232-8635eb91a327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet</figcaption>
          </figure>
          
         <figure>
           <img src="https://images.unsplash.com/photo-1597700561118-3b2cae28c6c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"/>
           <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>
          
         <figure>
           <img src="https://images.unsplash.com/photo-1609528107558-a923db1c54dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80"/>
           <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit. Lorem ipsum dolor sit amet, consectetur adipisici elit.</figcaption>
          </figure>
        
          <figure>
          <img src="https://images.unsplash.com/photo-1609531162568-8417bf956dca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>	
        
         <figure>
          <img src="https://images.unsplash.com/photo-1609587293767-380ca047a28f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet</figcaption>
          </figure>
        
          <figure>
          <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>	

          <figure>
          <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>	
          <figure>
          <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>	

          <figure>
          <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>	

          <figure>
          <img src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"/>
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipisici elit</figcaption>
          </figure>	 */}
        <small>&copy; <a href="www.damarisgoebel.com">Damaris Göbel</a></small>
          </div>
    )

}
export default Card