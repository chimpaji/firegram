import React from "react";
import { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import ProgressBar from "./comps/ProgressBar";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
	const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null)

	return (
		<div className='App'>
			<Title />
			<UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage&&<Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
		</div>
	);
}

export default App;
