import './Promotion.css'

const Promotion = ({smalltitle,title,text,About1,btn,revers,num1, data1, num2, data2}) => {
  return (
    <div className={(revers)?"Promotion revers":"Promotion"}>
      
        <div>
        <h6>{smalltitle}</h6>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{btn}</button>
        <div>
          <div className="PromotionNumber"><p>{num1}</p><p>{num2}  </p></div>
          <div className="PromotionText"> <p>{data1}</p><p>{data2}</p></div>
    
     
    </div>
        </div>
    <div className='Promotionimg'> <img src={About1} alt="" /></div>
  
 
       
    </div>
  )
}

export default Promotion