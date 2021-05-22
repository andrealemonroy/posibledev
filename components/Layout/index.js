import styles from "../../styles/Home.module.css";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
      setIsSticky(document.getElementById('container').getBoundingClientRect().top < -300);
  };

  useEffect(() => {
    console.log(isSticky);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${styles.header} sticky-wrapper ${
          isSticky ? "sticky-inner" : "hidden"
        }`}
        ref={ref}
      >
        <div>
          <h1 className={styles.title}>
            {/* <Link href="/">
              <a>Posible.</a>
            </Link> */}
          </h1>
        </div>
        <div className={styles.nav}>
          <nav>
            <Link href="/projects">
              <a>Nuestros proyectos</a>
            </Link>
          </nav>
          <div className={styles.cta}>Contáctanos</div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
