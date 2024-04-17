import './Title.css'
const Title = ({h1_t, h6_t}) => {
  return (
    <div className="title">
         <h6>{h1_t}</h6>
         <h1>{h6_t}</h1>
    </div>
  )
}

export default Title