import './NavBar.css'
import Menu from '../../assets/img/Menu.svg'
import X from '../../assets/img/X.svg'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


function changeBg() {
  let navbar=document.getElementsByClassName('nav');
  let scroll =window.scrollY;
  if(scroll<600){navbar[0].classList.remove('navbarScroll') }
  else{ navbar[0].classList.add('navbarScroll')}

  }
  
window.addEventListener('scroll',changeBg)
const NavBar = ({logo,btn,menu}) => {
 
const [leftdiv,setleftdiv]=useState(false)

  return (
  <div className='NavBar'>
<div className="nav">
     <img src={logo} alt="" />
     <ul>
       {menu.map((element,i)=>{
        return <li key={i}><NavLink to={element.path}
        className={({isActive}) =>isActive ? "active" : ""
      }
        
        
        
        >{element.title}</NavLink></li>
       })}
    </ul>
    <button className="btn">{btn}</button>
    <button onClick={()=>{setleftdiv(!leftdiv)}}   id='menubtn' ><img src={Menu} id='menuimg' alt="" /></button>
</div>

<div className='leftdiv' style={{display:(leftdiv)?"block":"none"}}>
    <button className='x'><img src={X} alt="" onClick={()=>{setleftdiv(!leftdiv)}}  /></button>

    <ul>
       {menu.map((element,i)=>{
        return <li key={i}><Link to={element.path}>{element.title}</Link></li>
        })}
     </ul>

     <button className="btn">{btn}</button>


</div>
   
     </div>
  )}

export default NavBar