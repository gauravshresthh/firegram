import React, { useState } from 'react';
import Title from '../Components/Title';
import UploadForm from '../Components/UploadForm';
import ImageGrid from '../Components/ImageGrid';
import Modal from '../Components/Modal';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default Home;
