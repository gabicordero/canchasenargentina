import Link from 'next/link'
import { Children } from 'react';
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
