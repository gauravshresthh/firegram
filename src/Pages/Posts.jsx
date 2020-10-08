import React, { useState } from 'react';
import Title from '../Components/Title';
import UploadForm from '../Components/UploadForm';
import ImageGrid from '../Components/ImageGrid';
import Modal from '../Components/Modal';

const Posts = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Posts;
