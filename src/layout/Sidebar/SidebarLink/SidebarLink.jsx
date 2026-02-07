import { NavLink } from 'react-router-dom';
import styles from './SidebarLink.module.css';

function SidebarLink({ route, name, image }) {
  return (
    <NavLink classname={styles.link} to={`/${route}`}>
      <img src={image} alt={`${name} icon`} />
      <p className={styles.name}>{name}</p>
    </NavLink>
  );
}

export default SidebarLink;
