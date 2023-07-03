import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = ('');
        setText(newText);
        props.showAlert("Textarea has been Cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }

    const handleCopy = () =>{
        // console.log("I'm copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success");
    }

    const [text, setText] = useState('Enter text here');
    //text= "new text"; // Wrong Way to change the state
    //settext("new text"); // Correct Way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#24292D', color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-info mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleCopy}>Copy to Clipboard</button>
                <button className="btn btn-outline-warning mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-outline-danger mx-1" onClick={handleClearClick}>Clear Textarea</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes took to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}
