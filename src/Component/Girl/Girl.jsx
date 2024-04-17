import './Girl.css'
import girl from '../../assets/img/girl.png'
import iconGirle from '../../assets/img/ant-design_play-circle-filled.svg'
const Girl = () => {
  return (
    <div className="Girl" style={{backgroundImage:`url(${girl})`}}>
    <h1 className='girl'>Wanderlust</h1>
    <img src={iconGirle} alt="" className='iconGirle'/>
        
    </div>
  )
}

export default Girl