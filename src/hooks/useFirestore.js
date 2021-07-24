import { useState } from "react";
import { useEffect } from "react";

import React from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
	const [docs, setDocs] = useState(null);
	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ id: doc.id, ...doc.data() });
				});
				setDocs(documents);
			});
		return () => unsub();
	}, [collection]);

	return { docs };
};

export default useFirestore;
