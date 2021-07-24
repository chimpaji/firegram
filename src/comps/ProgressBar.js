import React from "react";
import { motion } from "framer-motion";
import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

const ProgressBar = ({ file, setFile }) => {
	const { url, progress } = useStorage(file);
	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url]);

	return (
		<motion.div
			initial={{ width: "0%" }}
			animate={{ width: `${progress}%` }}
			id='progress-bar'
			className='bg-red-100'
		>
			progress
		</motion.div>
	);
};

export default ProgressBar;
