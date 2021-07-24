import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
	const { docs } = useFirestore("images");
	console.log(docs);
	return <div id='img-grid'>ImageGrid</div>;
};

export default ImageGrid;
