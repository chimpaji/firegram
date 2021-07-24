import React from "react";
import { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import ProgressBar from "./comps/ProgressBar";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
	const [file, setFile] = useState(null);

	return (
		<div className='App'>
			<Title />
			<UploadForm />
      <ImageGrid/>
		</div>
	);
}

export default App;
