import React, { useState, useEffect } from 'react'
import "./CreateAdd.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from '../config/firebase';
import { getAuth } from "firebase/auth";



const db = getFirestore(app);
const storage = getStorage();

function CreateAdd({ setChangeScreenCreateAdd }) {
    const [userUid, setUserUid] = useState()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [file, setFile] = useState()

    useEffect(() => {
        getuid()
    }, [])

    function getuid() {
        console.log("workinggggg...");
        const auth = getAuth();
        const user = auth.currentUser
        if (user) {
               
                const uid = user.uid;
                setUserUid(uid)
                // ...
            } else {
                console.log("user not found");
                // ...
            }

        };


    async function addData() {
        try {
            const url = await uploadImage()
            // console.log(url)

            const docRef = await addDoc(collection(db, "Ads"), {
                title, description, price, location, url, userUid
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Ad uploaded Successfully!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function goBack() {
        setChangeScreenCreateAdd("dashboard")
    }

    async function uploadImage (){
        console.log(file, "working...");
        const imageRef = ref(storage, "adsImage/" + file.name);
        const upload = await uploadBytes(imageRef, file);
        const URL = await getDownloadURL(ref(upload.ref));
        console.log(URL);
        return URL
    }

    return (
        <div className='form'>
            <BsFillArrowLeftCircleFill className='back-icon' onClick={goBack} />
            <Form>
                <h1>Create Add</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter your location" onChange={(e) => setLocation(e.target.value)} />
                </Form.Group>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <Button variant="primary" onClick={addData}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CreateAdd