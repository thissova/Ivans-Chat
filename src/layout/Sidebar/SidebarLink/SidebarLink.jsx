import {
  faGear,
  faMessage,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './SidebarLink.module.css';
import { motion } from 'motion/react';

const ICONS_MAP = {
  chats: faMessage,
  friends: faUserGroup,
  settings: faGear,
};

function SidebarLink({ route, name }) {
  const icon = ICONS_MAP[name.toLowerCase()];

  return (
    <motion.div className={styles.container} whileHover={{ scale: 1.1 }}>
      <NavLink className={styles.link} to={`/${route}`}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <p className={styles.name}>{name}</p>
      </NavLink>
    </motion.div>
  );
}

export default SidebarLink;
