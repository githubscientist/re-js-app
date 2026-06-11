import './MenuItem.css';

const MenuItem = ({ value }) => {
  return (
      <>
        <li className='listItem'><a href="#">{ value }</a></li>
      </>
  )
}

export default MenuItem;