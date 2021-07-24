import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const file = e.target.files[0];
		console.log(e.target.files[0]);
		if (file) {
			setError("");
			setFile(file);
		} else {
			setFile(null);
			setError("Please selete the right format");
		}
	};

	return (
		<form>
			<label htmlFor='upload'>+</label>
			<input
				id='upload'
				type='file'
				accept='image/*'
				className='hidden'
				onChange={handleChange}
			/>
			<div id='output'>
				{error && <div id='error'>{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadForm;
