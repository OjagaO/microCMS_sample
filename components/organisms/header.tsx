import styles from "../../src/styles/style.module.css";
import { useState } from "react";
import classNames from 'classnames';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const buttonClass = classNames('.plate', {
    '.swich': isActive,
  });

  return (
    <div className={styles.header}>
        <div className={styles.hd_area}>
            <a href="#top" className={styles.hd_title}>
                <h2>Hunter.</h2>
            </a>
            <nav>
                <ul className={styles.hd_list}>
                    <li><a href="#concept">CONCEPT</a></li>
                    <li><a href="#survice">SURVICE</a></li>
                    <li><a href="#greeting">GREETING</a></li>
                    <li><a href="#voice">VOICE</a></li>
                    <li><a href="#blog">BLOG</a></li>
                </ul>
            </nav>
        </div>
        <div className={styles.scroll_hd}>
            <a href="#top" className={`${styles.scroll_hd_title} ${styles.hd_title}`}>
                <h2>Hunter.</h2>
            </a>
            <nav>
                <ul className={`${styles.scroll_hd_list} ${styles.hd_list}`}>
                    <li><a href="#concept">CONCEPT</a></li>
                    <li><a href="#survice">SURVICE</a></li>
                    <li><a href="#greeting">GREETING</a></li>
                    <li><a href="#voice">VOICE</a></li>
                    <li><a href="#blog">BLOG</a></li>
                </ul>
            </nav>
        </div>
        <div className={styles.sp_hd}>
            <div className={styles.hamburger}>
                {/* onclick="this.classNameList.toggle('swich')" */}
                <div className={`${styles.plate} ${styles.plate1} ${buttonClass}`} onClick={handleButtonClick}>
                    <svg className={styles.burger} version="1.1" height="100" width="100" viewBox="0 0 100 100">
                        <path className={`${styles.line} ${styles.line1}`} d="M 30,65 H 70" />
                        <path className={`${styles.line} ${styles.line2}`}
                            d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695" />
                        <path className={`${styles.line} ${styles.line3}`}
                            d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695" />
                    </svg>
                    <svg className={styles.x} version="1.1" height="100" width="100" viewBox="0 0 100 100">
                        <path className={styles.line} d="M 34,32 L 66,68" />
                        <path className={styles.line} d="M 66,32 L 34,68" />
                    </svg>
                </div>
            </div>
            <div className={styles.open_hd}>
                <a href="#top" className={styles.open_title}>
                    <h2>Hunter.</h2>
                </a>
                <nav className={styles.open_nav}>
                    <ul className={styles.open_list}>
                    <li><a href="#concept">CONCEPT</a></li>
                    <li><a href="#survice">SURVICE</a></li>
                    <li><a href="#greeting">GREETING</a></li>
                    <li><a href="#voice">VOICE</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <a href="./reserve.html" className={styles.triangle_corner}>
            <p className={styles.tr_title}>RESERVE</p>
            <p><span>ご予約はこちら</span></p>
        </a>
    </div>
  );
};

export default Header;
