import pc5 from '../../assets/img/1.png'
import pc6 from '../../assets/img/2.png'
import './Containimg.css'

const Containimg = () => {
    const images =[{img:pc5,text:"Promotion",title:"Explore Nature",btn:"View Packages"},
    {img:pc6,text:"Promotion",title:"Explore Cities",btn:"View Packages"}]  
  return (
    <div>

<div className='ServicesImg'>
    {images.map((e,i)=>{
return(
  <div key={i} className='parentImage'  >
   
   <img src={e.img} alt=""/>
   <div className='text'>
    <h6>{e.text}</h6>
    <h1>{e.title}</h1>
    <button>{e.btn}</button>
 </div> 
</div>
)
})}
    </div>
   
    </div>
  )
}

export default Containimg