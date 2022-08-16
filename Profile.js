import React from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";




function Profile({setChangeScreenCreateAdd}) {
    function goBack() {
        setChangeScreenCreateAdd("dashboard")
    }
    return (

        <div className='Profile'>
            <BsFillArrowLeftCircleFill className='back-icon' onClick={goBack} />

            <div className='profile'>
                <h4>Edit Profile</h4>
                <hr />
                <h5>Basic information</h5><br />
                <input placeholder='Name' /><br />
                <textarea placeholder='Description' /><br />
                <p>0/200</p>
                <hr />
                <h5>Contact information</h5>
                <input placeholder='Contact Number' /><br />
                <input placeholder='Email Address' />
                <hr />
                <h5>Optional information</h5><br />
                <h6>Facebook</h6>
                <p>Signin with Facebook discover your trusted connection with buyer</p>
                <Button variant="outline-dark">Disconnected</Button>
                <h6>Google</h6>
                <p>Connect your OLX account to your Google account for simplicity and ease</p>
                <Button variant="outline-dark">Disconnected</Button>
                <hr />
                <h5>Discard</h5>
                <Button variant="secondary" size="lg" className='save-changes'>
                    Save Changes
                </Button>


            </div>

        </div>
    )
}

export default Profile