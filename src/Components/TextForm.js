import React, {useState} from 'react';

function TextForm(props){

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    } 

    const handleUpperClick = () => {
        const Uppertext = text.toUpperCase();
        setText(Uppertext);
        props.showAlert("Written text converted to uppercase", "Success");
    } 

    const clearText = (id) => {
        setText("");
        props.showAlert("Written text has been deleted", "Success");
    }

    const extraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been deleted", "Success");
    }

    const CapitalizeItem = () => {
        let lowerText = text.toLowerCase();
        let newText = lowerText.split(/[ ]+/);
        let result = newText.map((str) => {
            return str.charAt(0).toUpperCase() + str.substring(1);
        });
        setText(result.join(" "));
        props.showAlert("Text has been capitalized", "Success");
    }

    const CopytoClipboard = () => {
        
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard", "Success");
    }

    return (
        <>
        <div className = "container" style= {{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange = {handleChange} style = {{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <button disabled={text.length === 0} className = "btn btn-primary mx-2 my-2" onClick = {handleUpperClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className = "btn btn-primary mx-2 my-2" onClick = {clearText}>Clear text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={extraSpaces}>Clear extra spaces</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={CapitalizeItem}>Capitalize the text</button>
            <button disabled={text.length === 0} className = "btn btn-primary mx-2 my-2" onClick = {CopytoClipboard}>Copy text to clipboard</button>
        </div>

            <div className="container my-3" style= {{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Text summary</h1>
                <p>No of words are {text.split(" ").filter((element) => {return element.length !== 0}).length} and no of characters are {text.length}</p>
                <p>Reading time for slow reader(in min) = {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length}</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter text to preview"}</p>
            </div>
        </>
    )
}

export default TextForm;