import React from "react";
import { useState, useEffect } from "react";
import {
	projectStorage,
	projectFirestore,
	timestamp,
} from "../firebase/config";

const useStorage = (file) => {
	const [error, setError] = useState(null);
	const [progress, setProgress] = useState(0);
	const [url, setUrl] = useState("");

	useEffect(() => {
		const storageRef = projectStorage.ref(file.name);
		const collectionRef = projectFirestore.collection("images");
		storageRef.put(file).on(
			"state_changed",
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(error) => {
				setError(error);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();
				setUrl(url);

				collectionRef.add({ url, createdAt });
			}
		);
	}, [file]);

	return { progress, error, url };
};

export default useStorage;
