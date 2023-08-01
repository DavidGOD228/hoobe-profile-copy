import { Layout } from "@/components/Layout/Layout";
import UserProfile from "@/components/User/Profile";
import React from "react";
import styles from "./page.module.css";
import "../app/globals.css";
import HoobeIcon from "../../public/hoobe-white.svg";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Layout>
        <UserProfile />
      </Layout>
      <div className={styles.footer}>
        <div className={styles.ctaButton}>
          <Image src={HoobeIcon} alt={"logo"} className={styles.logo} />
          <span>create your hoo.be</span>
        </div>
        <a href={"https://devapp.hoo.be/login"} className={styles.loginLink}>
          <span className={styles.login}>login</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
