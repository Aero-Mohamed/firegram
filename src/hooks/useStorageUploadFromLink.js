import { useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const useStorageUploadFromLink = (link) => {
  const [error, setError] = useState(null);

  const checkURL = (url) => {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

  useEffect(() => {
    
    if(checkURL(link)){
      const collectionRef = projectFirestore.collection('images');
      const fileName = link.replace(/^.*\/|\.[^.]*$/g, '');
      const createdAt = timestamp();
      collectionRef.add({ url: clink, createdAt });
      
    }else{
      if(link != ''){
        setError('Please Enter valid image link');
      }
    }
  }, [link]);

  return { error };
}

export default useStorageUploadFromLink;