import "./styles.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy} from "@fortawesome/free-solid-svg-icons";




const RadialProgressBar = () => {
  const [progress, setProgress] = useState(25); // Initialize progress to 25%

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  const progressStyle = {
    "--progress": `${progress}`
  };

  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('POOR');
  const [badgeColor, setBadgeColor] = useState('red');
  useEffect(() => {
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

    if (strongPassword.test(password)) {
      setBadgeColor('green');
      setStrength('Strong');
    } else if (mediumPassword.test(password)) {
      setBadgeColor('blue');
      setStrength('Medium');
    } else {
      setBadgeColor('red');
      setStrength('Poor');
    }
  }, [password]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
 

  return (
    <div className="App">
      <div class="container">
        <form id="contact" action="" method="post">
          <h3>PS3&SVBIA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <FontAwesomeIcon icon={faCopy} size={"1x"} /></h3><br></br>
         
          <div>
            <div
              className="RadialProgress"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={progressStyle}
            >
            Character length &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{`${progress}`}
            </div>
            <input
             
              type="range"
              value={progress}
              min="0"
              max="100"
              onChange={handleChange}
              style = {{width : 340  }}       
               />
          </div>
          <fieldset>
            <input
            type="checkbox"
              tabindex="1"         
            /> Include UpperCase Letters
          </fieldset>
          <fieldset>
          <input
            type="checkbox"
              tabindex="1"         
            /> Include LowerCase Letters
          </fieldset>
          <fieldset>
          <input
            type="checkbox"
              tabindex="1"         
            /> Include Numbers
          </fieldset>
          <fieldset>
          <input
            type="checkbox"
              tabindex="1"         
            /> Include Symbols
          </fieldset>
          <div className="d-flex text-danger justify-content-center">
     
      
      <span
        id="StrengthDisp"
        className="bb"
        
      >
       STRENGTH &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{strength}
      </span>
      <br />
    </div>
          <fieldset>
       
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Generate
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RadialProgressBar;
