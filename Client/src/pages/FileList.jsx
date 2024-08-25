// FileList.js
import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import FileCard from './FileCard';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const FileList = () => {
  const { uuid } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/api/file`);
        setFiles(response.data);
        if (!response.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (response.ok) {
          setFiles(data.files[0]);
          setLoading(false);
          setError(false);
        }
        //setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

 
 
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() =>{
    if(!currentUser){
      useNavigate('/');
    }
  },[0]);


  
  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <main className=' p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      
    <div>
      <h1 className='text-3xl font-bold text-black dark:text-white'>  Uploaded Files</h1>
      <div className="file-list flex flex-wrap justify-between">
        
        {files.map((file,index) => (
         <div key={index} className="file-item">
          <FileCard key={index} file={file} />
          </div>
          
        ))}
      </div>
    </div>
    </main>
  );
};

export default FileList;