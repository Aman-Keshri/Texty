import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    if(text === ''){
      props.showAlert("No Text entered to use this functionality", "warning");
    }
    else{
      console.log("UpperCase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case!", "success");
    }
  }

  const handleLowClick = () => {
    if(text === ''){
      props.showAlert("No Text entered to use this functionality", "warning");
    }
    else{
      console.log("LowerCase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case!", "success");
    }
  }

  const handleClear = () => {
    if(text === ''){
      props.showAlert("No Text to Clear", "warning");
    }
    else {
      props.showAlert("Cleared!", "success");
      console.log("Cleared");
      setText('');
    }
  }

  const handleCamelCase = () => {
    if(text === ''){
      props.showAlert("No Text entered to use this functionality", "warning");
    }
    else{
      console.log("CamelCase was Clicked");
      let splitWord = text.trim().split(" ");
      let newtext;
      for(let i=0; i<splitWord.length; i++) {
        splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1).toLowerCase();
      }
      newtext = splitWord.join(" ");
      setText(newtext);
      props.showAlert("Converted to Camel Case!", "success");  
    }
  }
  
  const handleCopy = () => {
    if(text === ''){
      props.showAlert("No Text to Copy", "warning");
    }
    else{
      
      navigator.clipboard.writeText(text);
      
      props.showAlert("Copied to Clipboard!", "success");
    }
  }

  const handleExtraSpace = () => {
    if(text === ''){
      props.showAlert("No Text entered to use this functionality", "warning");
    }
    else{
      console.log("Remove Extra Space");
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra Space Removed!", "success");
    }
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
      <div className="container my-4">   
        <h1 className='mb-4'>{props.heading}</h1> 
        <div className="mb-3">
          <textarea className="form-control" value ={text} style = {{backgroundColor: props.mode === 'dark' ? '#042743':'white', color: props.mode === 'dark' ? 'white':'black'}} placeholder="Enter Your Text here" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCamelCase}>Convert to CamelCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
      </div>

      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} Words, {text.trim().length} Characters</p>
        <p>{text.trim().length > 0 ? 0.008 * text.trim().split(" ").length : 0} Minute Read</p>

        {text.length > 0 ? <h3>Preview</h3>:<h3> </h3>}
        <p>{text}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
  heading: 'Enter Text'
}
