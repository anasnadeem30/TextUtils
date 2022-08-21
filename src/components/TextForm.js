import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper Case!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lower Case!", "success")
    }
    
    const handleClClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = ""
        setText(newText);
    }

    const handleToCopy=()=>{
        console.log("I am copy");
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to Clipboard!", "success");
    }
    

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert(" Extra spaces have been removed!", "success")
        }

    const speak = () => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
          }

    const [text, setText] = useState("");

    function WordCount(str) {
        return str.split(' ')
               .filter(function(n) { return n !== '' })
               .length;
   }

    return (
        <>
    <div className='container' style={{color:props.mode==='black'?'white':'black' }}>
         <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='black'?'#17284D':'white',
        color:props.mode==='black'?'white':'black'}} id="myBox" rows="8"></textarea>
         </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-info mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClClick} >Clear Text</button>
        <button className="btn btn-warning mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleToCopy} >Copy</button>
        <button className="btn btn-secondary mx-2" onClick={speak} >Speak</button>
    </div>
        <div className="container my-3" style={{color:props.mode==='black'?'white':'black' }}>
            <h1>Your text summary</h1>
            <p>{WordCount(text)} words, {text.length} characters  </p>
        </div>
    </>
    )
    }
