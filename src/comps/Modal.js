import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
	const handleClick = (e) => {
		console.log(e.target.className);
		if (e.target.className === "backdrop") {
			setSelectedImage(null);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='backdrop'
			onClick={handleClick}
		>
			<motion.img
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}
				src={selectedImage}
				alt=''
			/>
		</motion.div>
	);
};

export default Modal;
