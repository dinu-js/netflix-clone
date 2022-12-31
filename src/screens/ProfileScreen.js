import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom';
import "./ProfileScreen.css";

function ProfileScreen() {

    const user = useSelector(selectUser);
    const history = useNavigate();

    useEffect(()=>{
        if(!user?.email){
            history("/");
        }
        return () => {}
    })
  return (
    <div className='profileScreen'>
        
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt=''></img>
                <div className='profileScreen__details'>
                    <h2>{user?.email}</h2>
                    <div className='profileScreen__plans'>
                        <button onClick={()=>auth.signOut()}
                        className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen