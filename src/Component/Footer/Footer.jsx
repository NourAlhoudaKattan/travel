import travel from'../../assets/img/travel1.png'
import linkedin from '../../assets/img/052-linkedin.png'
import mass from'../../assets/img/025-messenger.svg'
import tweet from'../../assets/img/096-twitter.png'
import twoo from'../../assets/img/097-twoo.svg'
import bcf from '../../assets/img/Footerimg.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='pfooter' style={{backgroundImage:`url(${bcf})`}}> 
        
         <div className='footer'  >
      
            <div className='list1'>
            <img src={travel} alt="" />
            <p>Travel helps companies manage payments easily.</p>
            <ul className='ulicon'>
                <li><img src={linkedin} alt="" /></li> 
                <li><img src={mass} alt="" /></li>
                <li><img src={tweet} alt="" /></li>
                <li><img src={twoo} alt="" /></li>
            </ul>

            </div>
             
             <div className="p-l2-l3">
             <div className='list2'>
        <ul>
            <li><p>Company</p></li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
        </ul>

            </div>
            <div className='list3'>
         <ul>
            <li><p>Destinations</p></li>
            <li>Maldives</li>
            <li>Los Angelas</li>
            <li>Las Vegas</li>
            <li>Torronto</li>
        </ul>
            </div>

        </div>
             </div>
   
    <p className='textbuttom'>Copyright @ Xpro 2023 All Rights Reserved.</p> 
    </div>
  )
}

export default Footer