import pc1 from '../../assets/img/tour-guide 1.png'
import pc2 from '../../assets/img/travelling 1.png'
import pc3 from '../../assets/img/medical-team 1 (1).png'
import pc4 from '../../assets/img/hands 1 (1).png'
import Title from '../Title/Title'
import './Best Services.css'




const BestServices = () => {
    let contintcard=[{img:pc1,titel:"Guided Tours",text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img:pc2,titel:"Best Flights Options",text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img:pc3,titel:"Religious Tours",text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img:pc4,titel:"Medical insurance",text:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}]

  
  return (
    <div className="BestServices">
      <Title h1_t="CATEGORY" h6_t="We Offer Best Services"/>

    <div className="Services">
    {contintcard.map((e,i)=>{return (
        <div key={i} className='s'>
            <img src={e.img} alt="" />
            <h1>{e.titel}</h1>
            <p>{e.text}</p>
        </div>)})}
    </div>

   

</div>
  )
   
  

}
  

export default BestServices