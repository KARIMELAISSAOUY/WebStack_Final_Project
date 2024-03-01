import './Navbar.css'
import ferrarilogo from '../../assets/ferrarilogo.png'

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo"><img className="logo" src={ferrarilogo} alt="logo"/></div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact <i class="fa fa-phone" aria-hidden="true"></i></li>
      </ul>

    </div> 
  )
}
export default Navbar


// dv by karim