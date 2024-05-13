import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>AdminUI</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />

        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>

        <div className="user">
          <img src="https://images.pexels.com/photos/21972309/pexels-photo-21972309/free-photo-of-a-girl-with-red-hair-and-a-guitar-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>John</span>
        </div>

        <img src="/settings.svg" alt="" />
      </div>
    </div>
  )
}
