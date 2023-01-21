import React from 'react'
import registerpopup from './components/registerpopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <body>
        <section class="signin">
          <div class = "si-container"> 
            <input class="si-buttonplace" type = "text" placeholder="Email"></input> 
            <input class="si-buttonplace" type = "password" placeholder="Password"></input> 
            <div class="si-r-buttoncontainer">
              <button class="sibutton"> SIGN IN </button>
              <button class="rbutton"> REGISTER </button>
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
