import { useState, useEffect } from 'react';
import { dataFirestore } from '../firebase/config';

export default function useFirestore(collection) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = dataFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let document = [];
                snap.forEach(doc => {
                    document.push({ ...doc.data(), id: doc.id })
                    doc.data()
                });
                setDocs(document);
            })
        return () => unsub();
    }, [collection])

    return { docs };
}
