import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import BestServices from "../BestServices/BestServices"
import Containimg from "../Containimg/Containimg"
import Trending from "../Trending/Trending"

import logo from '../../assets/img/logo.png'
import bc from '../../assets/img/bc-hero.png'

const HomePage = () => {
  return (
    <div>
   <NavBar logo={logo} menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About"},
                              {path:"/Service",title:"Service",},
                              {path:"/Contact",title:"Contact"}]}  btn="Get in Touch"/>  
    <Hero bc={bc} text_hero={"No matter where you’re going to, we’ll take you there"} x={true}/> 
      <BestServices/>  
     <Containimg/> 
     <Trending/>  
    
    

    </div>
  )
}

export default HomePage