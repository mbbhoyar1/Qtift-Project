import React from "react";


// import logoImage from "../assest/logoImage.png"
import styles from './Logo.module.css';
import LogoFinal from "../assest/LogoFinal.png"

const Logo = () => <img className={styles.logo} src={LogoFinal} alt="logo" width={67} />;

export default Logo;
