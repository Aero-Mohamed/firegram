import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  const handleLinkInput = (e) => {
      if(isValidHttpUrl(e.target.value)){
        setLink(e.target.value);
        setError('');
      }else{
        setError('enter valid link');
      }
  };

  const isValidHttpUrl = (string) => {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <form>
      <input type="text" onChange={handleLinkInput} />
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} link={null} setLink={null} /> }
        { link && <ProgressBar file={null} setFile={null} link={link} setLink={setLink} /> }
      </div>
    </form>
  );
}

export default UploadForm;