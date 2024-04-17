import './Hero.css'

// eslint-disable-next-line react/prop-types

const Hero = ({bc,text_hero,x}) => {
  
  return (
    <div className="hero" style={{backgroundImage:`url(${bc})`}}>
    <h1  className={(x)?"text-hero":"text-hero2"} >{text_hero}</h1>
    </div>
  )
}

export default Hero