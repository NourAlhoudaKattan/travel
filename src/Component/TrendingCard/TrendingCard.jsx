import trend1 from '../../assets/img/trend1.png'
import trend2 from '../../assets/img/trend2.png'
import trend3 from '../../assets/img/trend3.png'
import Ellipse1 from '../../assets/img/Ellipse1.png'
import Ellipse2 from '../../assets/img/Ellipse2 .png'
import Ellipse3 from '../../assets/img/Ellipse3.png'
import calender from '../../assets/img/calender.svg'
import user from '../../assets/img/user-avatar.svg'
import stars from '../../assets/img/stars.png'
import './TrendingCard.css'

const TrendingCard = () => {
    const trenCard=[
        {img:trend1,Ellipse:Ellipse1,icon:calender,date:"8 days",icon2:user,date2:"30 People going",title:"Switzerland",star:stars,text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",btn:"Explore Now"},
        {img:trend2,Ellipse:Ellipse2,icon:calender,date:"8 days",icon2:user,date2:"60 People going",title:"Amazon",star:stars,text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",btn:"Explore Now"},
        {img:trend3,Ellipse:Ellipse3,icon:calender,date:"8 days",icon2:user,date2:"120 People going",title:"Giza",star:stars,text:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",btn:"Explore Now"},
       
    ]

  return (
    <div className='parenttren'>
        {trenCard.map((e,i)=>{
            return(
               
                 <div   key={i}  className='bigtren'>
                    <div className='tren1'>
                      <img src={e.img} alt="" id="img1" /> 
                       <img src={e.Ellipse} alt="" className='ellips'/> 
                    </div>
                 
                   <div className='tren2-3'>
                 <div className='tren2'>
                    <div className='top1'>
                    <img src={e.icon} alt="icon" />
                    <p>{e.date}</p>
                    </div> 
                    
                    
                    <div className='top2'>
                    <img src={e.icon2} alt="icon" />
                      <p>{e.date2}</p>
                     
                    </div>
                    </div>
 
                    <div className='tren3'>
                      <p>{e.title}</p>
                      <img src={e.star} alt="star" />
                    </div>
                    
                    <div>
                            
                      <p className='texttren'>{e.text}</p>
                     <button className='trenbtn'>{e.btn}</button> 
                    </div> 
                 </div> 
                   
        
               </div>
                  
            
                
                    )
        })

        }
        
    </div>)
  
}

export default TrendingCard