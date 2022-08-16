import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { getAuth } from "firebase/auth";
import app from '../config/firebase';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";


const db = getFirestore(app);


function Myads() {

    const [userUid, setUserUid] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        getuid()

    }, [])

    function getuid() {
        console.log("workinggggg...");
        const auth = getAuth();
        const user = auth.currentUser
        if (user) {

            const uid = user.uid;
            myads(uid)
            setUserUid(uid)

            // ...
        } else {
            console.log("user not found");
            // ...
        }

    };

    console.log("current user", userUid);

    async function myads(e) {
        console.log("userUID", e);

        const q = query(collection(db, "Ads"), where("userUid", "==", e));
        let data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            data = [...data, doc.data()]

            console.log("doc.data", doc.data());
        });
        console.log("data --->", data);
        setData(data)
        return data
    }

    const {title, description, location, price, url} = data

    return (
        <div>
            {data.maps((item) => {
                return (
                    <ProductCard {...item} />
                )
            })}
        </div>
    )
}

export default Myads