import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useNavigate();
    const transitionNavbar=()=>{
        if(window.scrollY > 100 ){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
        return ()=>window.removeEventListener('scroll', transitionNavbar);
    },[])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
            <img onClick={()=>history("/")}
            className="nav_logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png?w=1024" alt=""/>
            <img onClick={()=>history("/profile")}
            className="nav_avatar" src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png" alt=""/>
        </div>
    </div>
  )
}

export default Nav