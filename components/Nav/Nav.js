import React from "react";
import Image from "next/image";

import styles from "./Nav.module.scss";
import Logo from "../../public/assets/nav/logo.svg";

export default function Nav() {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigationLogo}>
        <Image src={Logo} alt="Logo Shortly" />
      </div>
      <nav className={styles.navigationLinks}>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </nav>
      <div className={styles.navigationAccount}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}
