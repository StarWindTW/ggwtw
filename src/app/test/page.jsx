"use client"
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import React from 'react'
import { storage } from '../../../firebase';

const Test = () => {
    const storageRef = ref(storage, '/');
    listAll(storageRef)
        .then((result) => {
            result.items.forEach((itemRef) => {
                console.log('File:', itemRef);
                getDownloadURL(itemRef)
                    .then((url) => {
                        console.log(url)
                    })
                    .catch((error) => {
                        // Handle any errors
                    });
            });
            result.prefixes.forEach((folderRef) => {
                console.log('Folder:', folderRef.fullPath);
            });
        })
    return (
        <div>Test</div>
    )
}

export default Test