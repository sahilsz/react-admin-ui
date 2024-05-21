import { Link } from 'react-router-dom';

import './menu.scss';

import { menu } from '../../data';

export default function Menu() {
  return (
    <div className='menu'>

      {menu.map((item, i) => (

      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map((listItem, i) => (

        <Link to={listItem.url} className="listItem" key={listItem.id}>
          <img src={listItem.icon} alt="" />
          <span className="listItemTitle">{listItem.title}</span>
        </Link>
        ))}
        {/* <Link to="/profile" className="listItem">
          <img src="/profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link> */}
      </div>

      ))}
    </div>
  )
}
