import NavBar from "../NavBar/NavBar"
import Hero from "../Hero/Hero"
import logo from '../../assets/img/logo.png'
import bc from '../../assets/img/bc-hero2.png'
import About1 from '../../assets/img/1-about.png'
import './About.css'
import Promotion from "../Promotion/Promotion"
import Girl from "../Girl/Girl"
import About2 from '../../assets/img/about-us-img-2 1.png'
const About = () => {
  return (
    <div>
        <NavBar logo={logo} menu={[{path:"/",title:"Home",},
                              {path:"/About",title:"About"},
                              {path:"/Service",title:"Service",},
                              {path:"/Contact",title:"Contact"}]}  btn="Get in Touch"/>  
          <Hero bc={bc}  text_hero= "About Us" x={false}/> 
         <Promotion smalltitle="Promotion" title="We Provide You Best Europe Sightseeing Tours" text="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
         About1={About1} btn="View Packages" revers={false}/>
          <Girl/>
          <Promotion smalltitle="Trend" title="Our Popular Tour Plans" text="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium."
          About1={About2} revers={true} num1="78%" data1="Vacations" num2="55%" data2="Honeymoon"/>  
    </div>
  )
}

export default About