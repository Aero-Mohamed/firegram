import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import useStorageUploadFromLink from '../hooks/useStorageUploadFromLink';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile , link, setLink}) => {
  
  const { progress1, url } = useStorage(file);
  const { error } = useStorageUploadFromLink(link);  
  
  useEffect(() => {
    if (url) {
      setFile(null);
    }
    if (error === ''){
      setLink(null);
    }
  }, [url, setFile, error, setLink]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress1 + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;