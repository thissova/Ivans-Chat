import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './../../assets/logo.svg';
import styles from './Sidebar.module.css';
import SidebarLink from './SidebarLink/SidebarLink';
import { motion } from 'motion/react';
function Sidebar() {
  return (
    <nav className={styles.container}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <NavLink to={'/about'}>
          <LogoSvg className={styles.logo} />
        </NavLink>
      </motion.div>
      <SidebarLink name={'Chats'} route={'chats'} />
      <SidebarLink name={'Friends'} route={'friends'} />
      <SidebarLink name={'Settings'} route={'settings'} />
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
