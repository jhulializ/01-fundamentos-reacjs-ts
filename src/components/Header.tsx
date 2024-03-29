import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-log.svg.svg';

console.log(igniteLogo);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
