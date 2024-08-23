import NavButton from '../NavButton/NavButton'
import './PropertyCard.css'

const PropertyCard = ({ data }) => {
  return (
    <div className='property-card'>
      <a href="#">
        <img src={data.img} alt="property-img" />
      </a>
      <div className='property-price-info'>
        <span className='category'>{data.type}</span>
        <h6>{data.price}</h6>
      </div>
      <h4><a href="#">{data.location}</a></h4>
      <ul>
        <li>Bedrooms: {data.bedrooms}</li>
        <li>Bathrooms: {data.bathrooms}</li>
        <li>Area: {data.area}</li>
        <li>Floor: {data.floor}</li>
        <li>Parking: {data.parking}</li>
      </ul>
      <NavButton />
    </div>
  )
}

export default PropertyCard