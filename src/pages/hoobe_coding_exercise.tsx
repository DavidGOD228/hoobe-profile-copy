import { Layout } from "@/components/Layout/Layout";
import { NextPage } from "next";
import UserProfile from "@/components/User/Profile";
import styles from "./page.module.css";
import "../app/globals.css";
import HoobeIcon from "../../public/hoobe-white.svg";
import Image from "next/image";
import PageData from "../../public/pageData.json";
import { IPageData } from "../types/pageData";
import Head from "next/head";

interface IHomePage {
    PageData: IPageData;
}

const HoobeCodingExercise: NextPage<IHomePage> = ({ PageData }) => {
  return (
    <div className={styles.main}>
        <Head>
            <title>{"hoo.be coding exercise"}</title>
        </Head>
      <Layout>
        <UserProfile PageData={PageData} />
      </Layout>
      <div className={styles.footer}>
        <div className={styles.ctaButton}>
          <Image src={HoobeIcon} alt={"logo"} className={styles.logo} />
          <span>create your hoo.be</span>
        </div>
        <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/login`} className={styles.loginLink}>
          <span className={styles.login}>login</span>
        </a>
      </div>
    </div>
  );
};

export function getServerSideProps() {
    return {
        props: {
            PageData: PageData
        }
    }
}

export default HoobeCodingExercise;
