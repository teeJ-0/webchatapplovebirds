import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons'

function registerpopup() {
  return (
    <div>
        <section id="rdiv" class="register">
          <div class="r-container"> 
            <input class="r-buttonplace" type = "text" placeholder="Name"></input> 
            <input class="r-buttonplace" type = "text" placeholder="Email"></input> 
            <input class="r-buttonplace" type = "text" placeholder="Username"></input> 
            <input class="r-buttonplace" type = "password" placeholder="Password"></input> 
            <input class="r-buttonplace" type = "password" placeholder="Confirm Password"></input> 
            <div className='x-s-buttoncontainer'>
              <div><FontAwesomeIcon className="xmark" icon={faXmarkSquare} size="xl"/>
                <button class="submit-button">SUBMIT</button>
              </div>
            </div>
          </div>
        </section>     
    </div>
  )
}

export default registerpopup;
