import { Link } from 'react-router-dom'
import style from './Nav.module.css'
import logo from '../../assets/logo2.png'

function Nav(props) { 
  return (
    <div className={style.navContainer}>
      <div className={style.logoContainer}>
        <img 
          src={logo} 
          alt='Rick and morty logo'
          className={style.logo}
        />
      </div>
        <div className={style.linkContainer}>
          <Link to='/home' className={style.link}>
            Home
          </Link>
          <Link to='/favorites' className={style.link}>
            Favorites
          </Link>
          <Link to='/about' className={style.link}>
            About
          </Link>
        </div>
    </div>
  )
}

export default Nav