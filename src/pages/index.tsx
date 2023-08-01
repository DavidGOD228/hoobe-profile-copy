import { Layout } from "@/components/Layout/Layout";
import UserProfile from "@/components/User/Profile";
import React from "react";
import styles from "./page.module.css";
import "../app/globals.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Layout>
        <UserProfile />
      </Layout>
    </div>
  );
};

export default HomePage;
