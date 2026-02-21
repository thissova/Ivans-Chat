import {
  faGear,
  faMessage,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './SidebarLink.module.css';

function SidebarLink({ route, name }) {
  const getIcon = () => {
    if (name.toLowerCase() === 'chats') return faMessage;
    else if (name.toLowerCase() === 'friends') return faUserGroup;
    else if (name.toLowerCase() === 'settings') return faGear;
  };
  return (
    <NavLink className={styles.link} to={`/${route}`}>
      <FontAwesomeIcon icon={getIcon()} className={styles.icon} />
      <p className={styles.name}>{name}</p>
    </NavLink>
  );
}

export default SidebarLink;
