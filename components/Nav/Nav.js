import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Nav.module.scss";
import Logo from "../../public/assets/nav/logo.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Nav() {
  const matches = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!matches) {
      setIsOpen(false);
    }
  }, [matches]);

  return (
    <header className={styles.navigation}>
      <div className={styles.navigationLogo}>
        <Image priority src={Logo} alt="Logo Shortly" />
      </div>
      {matches ? (
        <>
          <nav className={styles.navigationLinks}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </nav>
          <div className={styles.navigationAccount}>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </>
      ) : (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.navigationBurgerMenu}
        >
          <AiOutlineMenu />
        </div>
      )}
      {!matches && isOpen && (
        <nav className={styles.navigationMobile}>
          <div className={styles.navigationMobileLinks}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>
          <hr />
          <div className={styles.navigationMobileAccount}>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
      )}
    </header>
  );
}
