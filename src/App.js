import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons'

function App() {
  const handleClick = () => {
    
  }

  return (
    <div>
      <body>
        <section class="signin">
          <div class = "si-container"> 
            <input class="si-buttonplace" type = "text" placeholder="Email"></input> 
            <input class="si-buttonplace" type = "password" placeholder="Password"></input> 
            <div class="si-r-buttoncontainer">
              <button class="sibutton"> SIGN IN </button>
              <button onClick={handleClick} class="rbutton"> REGISTER </button>
            </div>
          </div>
        </section>
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
      </body>
      <script src="index.js"></script>
      <script src="https://kit.fontawesome.com/2f696bdf7c.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
