import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import SidebarLink from './SidebarLink/SidebarLink';

function Sidebar() {
  return (
    <nav className={styles.container}>
      <NavLink to={'/about'} className={styles.logo}>
        <img src="./../../assets/logo.svg" alt="logo" />
      </NavLink>
      <SidebarLink image={''} name={'News'} route={'news'} />
      <SidebarLink image={''} name={'Chats'} route={'chats'} />
      <SidebarLink image={''} name={'Settings'} route={'settings'} />
      <div
        style={{
          width: '100px',
          height: '100px',
          textAlign: 'center',
          color: 'white',
          backgroundColor: 'green',
          alignSelf: 'center',
        }}
      >
        I(Profile Picture, temp)
      </div>
    </nav>
  );
}

export default Sidebar;
