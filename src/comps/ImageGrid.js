import React from "react";
import useFirestore from "../hooks/useFirestore";
import {motion} from 'framer-motion'


const ImageGrid = ({setSelectedImage}) => {
	const { docs } = useFirestore("images");
	console.log(docs);
	return (
		<div className='img-grid'>
			{docs &&
				docs.map((doc) => (
					<motion.div layout whileHover={{opacity:1}} className='img-wrap' key={doc.id} onClick={()=>setSelectedImage(doc.url)}>
						<img src={doc.url} alt='' />
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
