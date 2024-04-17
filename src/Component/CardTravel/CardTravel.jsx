import us1 from '../../assets/img/us1.png'
import us2 from '../../assets/img/us2.png'
import us3 from '../../assets/img/us3.png'
import us4 from '../../assets/img/us4.png'
import us5 from '../../assets/img/us5.png'
import us6 from '../../assets/img/us6.png'
import star1 from '../../assets/img/star1.svg'
import './CardTravel.css'
const CardTravel = () => {
    const CardTravel=[
        {img:us1,p1:"27, September 2023",p2:"30+ People",title:"Maldives",text:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us2,p1:"13, October 2023",p2:"120+ People",title:"Switzerland",text:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",num1:"1290 $",icon:star1,num2:"4.9"}, 
        {img:us3,p1:"2, November 2022",p2:"139+ People",title:"Berlin",text:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us4,p1:"14, December 2022",p2:"50+ People",title:"Torronto",text:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us5,p1:"20, September 2022",p2:"80+ People",title:"Baku",text:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",num1:"3000 $",icon:star1,num2:"5.0"},
        {img:us6,p1:"27, August 2022",p2:"100+ People",title:"Chinese",text:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",num1:"3000 $",icon:star1,num2:"5.0"}]
        
  return (
    <div  className='PCardTravel'>
      {CardTravel.map((element,i)=>{
        return(
          <div  key={i} className='CardTravel'>
         <img src={element.img} alt="" />
         <div className='tr1'>
         <p>{element.p1}</p>
         <p>{element.p2}</p>
         </div>
         
         <h1>{element.title}</h1>
         <p id="trvelText">{element.text}</p>

         <div className='star1'>
         <p>{element.num1}</p> 
         <img src={star1} alt="" />
         <p>{element.num2}</p> 
         
         </div>
        
                 </div>
        )
      })

      }

    
    </div>
  )
}

export default CardTravel