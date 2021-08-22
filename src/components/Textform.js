import React, { useState } from 'react'

export default function Textform(props) {

  const upperCase = () => {
    console.log("changed   " + text);
    let newText = text.toUpperCase();
    setText("changed: " + newText)
  }
  const handleChange = (event) => {
    console.log(" on change ");
    setText(event.target.value);
  }
  const lowerCase = () => {
    let nText = text.toLowerCase();
    setText("changed:  " + nText);

  }
  const colorChange = () => {

    document.getElementById("exampleFormControlTextarea1").style.color = "red";

  }
  const clear =() =>{
    setText("");
  }



  const [text, setText] = useState('enter your text here');

  return (
    <div>
      <>
       
          <div className="container">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label" id="wdark" >{props.name}</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="WISH" />
            </div>
            <div className="mb-10">
              <label for="exampleFormControlTextarea1" className="form-label" id="wdark">{props.area}</label>
              <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <br>
            </br>
            <button type="button" class="btn btn-success mx-2" onClick={upperCase}>Upper</button>

            <button type="button" class="btn btn-success mx-2" onClick={lowerCase}>Lower</button>

            <button type="button" class="btn btn-success mx-2" onClick={colorChange}>Color</button>
            <button type="button" class="btn btn-success mx-2 my-2" onClick={clear}>Clear</button>
     <br></br>
     <br></br>

     <div className="container" id="wdark">
        <h2>Number of words in sentence:</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>

        <h2>Preview: </h2>
        <h5>{0.008*text.split(" ").length} Minutes Read</h5>
        <p><strong>{text}</strong></p>

       
     </div>
          </div>

      </>
    
    </div>
  )
}
