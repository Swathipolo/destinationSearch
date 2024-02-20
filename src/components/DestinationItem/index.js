// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachDestinationDetail} = props
  const {imgUrl, name} = eachDestinationDetail
  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
