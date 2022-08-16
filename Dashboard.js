import { useEffect, useState } from 'react'
import "./Dashboard.css"
import Button from 'react-bootstrap/Button';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessIcon from '@mui/icons-material/Business';
import ProductCard from './ProductCard';
import app from '../config/firebase';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';

const auth = getAuth(app);
const db = getFirestore(app);
// const dispatch = useDispatch();

function Dashboard({ setChangeScreenCreateAdd }) {

    const [ads, setAds] = useState([])
    useEffect(() => {
        getData();
    }, [])
    function createAdd() {
        setChangeScreenCreateAdd('createadd')
    }

    async function getData() {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "Ads"));
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            data = [...data, doc.data()]
        });
        console.log(data);
        setAds(data)
        return data;
    }

    function logOut() {
        alert("LogOut")
        signOut(auth).then(()=> {
            console.log("logout user")
        }).catch((error) => {
            console.log(error);
        })
        setChangeScreenCreateAdd("login")
    }

    function profile() {
        setChangeScreenCreateAdd("profile")
    }

    function myads () {
        setChangeScreenCreateAdd("myads")
    }
    

    const { title, price, description, location, url } = ads

    return (
        <div>
            <div className='header_top'>
                <img src='data:image/png;base64,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' className='olx_logo' />
                <div className='motor_icon'>
                    <DirectionsCarIcon />
                    <p>MOTORS</p>
                </div>
                <div className='motor_icon'>
                    <BusinessIcon />
                    <p>PROPERTY</p>
                </div>
            </div>
            <hr />
            <div className='buttons'>
                <Button variant="outline-primary" onClick={createAdd}>Create Add</Button>
                <Button variant="outline-primary" onClick={myads}>My Add</Button>
                <Button variant="outline-primary" onClick={profile}>Profile</Button>
                <Button variant="outline-primary" onClick={logOut}>Logout</Button>
            </div>
            <h1 className='fresh_recommendation'>Fresh recommendation</h1><br />
            <div className='ProductsCard'>
                {ads.map((item) => {
                    return (
                        // console.log(item)
                        <ProductCard {...item} />
                    )
                })}

            </div>
            {/* header section */}
            {/* menu section */}
            {/* slider */}
            {/* recommendation */}
        </div>
    )
}

export default Dashboard