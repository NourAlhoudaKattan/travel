import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import logo from '../../assets/img/logo.png'
import bc from '../../assets/img/bc-hero3.png'
import CardTravel from "../CardTravel/CardTravel"

const TravelWithUs = () => {
  return (
    <div>
    <NavBar logo={logo} menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About"},
                              {path:"/Service",title:"Service",},
                              {path:"/Contact",title:"Contact"}]}  btn="Get in Touch"/>  
     <Hero bc={bc} text_hero={"Travel With Us"}  x={false} /> 
     <CardTravel/>
   
   
    </div>
  )
}

export default TravelWithUs